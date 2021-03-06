package gaia.sdk.core

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.GaiaCredentials
import gaia.sdk.JWTCredentials
import gaia.sdk.Uuid
import gaia.sdk.api.ISensorFunction
import gaia.sdk.api.ISensorQueue
import gaia.sdk.api.ISensorStream
import gaia.sdk.http.HttpSensorFunction
import gaia.sdk.http.HttpSensorStream
import gaia.sdk.http.HttpTransportException
import gaia.sdk.http.TransporterFactory
import gaia.sdk.mqtt.MqttSensorQueue
import gaia.sdk.request.input.*
import gaia.sdk.request.type.BehaviourExecution
import gaia.sdk.request.type.BehaviourExecutionDetail
import gaia.sdk.request.type.Edge
import gaia.sdk.request.type.Experience
import gaia.sdk.request.type.Knowledge
import gaia.sdk.request.type.IdentityMetrics
import gaia.sdk.request.type.BehaviourMetrics
import gaia.sdk.request.type.Retrieval
import gaia.sdk.response.type.*
import gaia.sdk.spi.QueueOptions
import io.netty.buffer.Unpooled
import org.reactivestreams.Publisher
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.netty.http.client.HttpClient
import java.io.ByteArrayOutputStream

class Gaia {
    companion object {

        private val jsonparser = ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
        var transporterFactory = TransporterFactory()

        fun connect(url: String, credentials: GaiaCredentials): GaiaRef {
            return GaiaRef(GaiaConfig(url, credentials, transporterFactory))
        }

        fun connect(config: GaiaConfig): GaiaRef {
            return GaiaRef(config)
        }

        fun login(url: String, credentials: UsernamePasswordCredentials): GaiaCredentials {
            val loginRequest = jsonparser.writeValueAsBytes(credentials)
            val response = HttpClient.create()
                    .headers {
                        it.add("Content-Type", "application/json")
                    }
                    .followRedirect(true)
                    .post()
                    .uri("${url}/api/auth/access")
                    .send(Mono.just(Unpooled.copiedBuffer(loginRequest)))
                    .responseConnection { t, u ->
                        u
                                .inbound()
                                .receive()
                                .asByteArray()
                                .buffer()
                                .map { list ->
                                    val bos = ByteArrayOutputStream()
                                    list.forEach(bos::write)
                                    bos.toByteArray()
                                }
                                .switchIfEmpty(
                                        Flux.just(t.status())
                                                .flatMap {
                                                    if (it.code() >= 400) {
                                                        val msg = "Error with status code ${t.status().code()} (${t.status().reasonPhrase()}) and no payload"
                                                        Flux.error(HttpTransportException(msg))
                                                    } else {
                                                        Flux.empty<ByteArray>()
                                                    }
                                                }
                                )
                                .map { byteArray ->
                                    if (t.status().code() >= 400) {
                                        val msg = "Error with status code ${t.status().code()} (${t.status().reasonPhrase()}) and payload: ${String(byteArray)}"
                                        throw HttpTransportException(msg)
                                    }

                                    jsonparser.readValue(byteArray, LoginResponse::class.java)
                                }
                    }.cast(LoginResponse::class.java).blockFirst()

            response ?: throw Exception("No response received from login")

            return JWTCredentials(response.accessToken)
        }
    }
}


class GaiaConfig(val url: String,
                 val credentials: GaiaCredentials,
                 val transporterFactory: TransporterFactory,
                 val functionProcessor: ISensorFunction = HttpSensorFunction(url, credentials, transporterFactory),
                 val queueProcessor: ISensorQueue = MqttSensorQueue(QueueOptions("localhost", 1883)),
                 val streamProcessor: ISensorStream = HttpSensorStream(url, credentials, transporterFactory))

class GaiaRef(config: GaiaConfig) : ISensorFunction, ISensorStream {
    private val fProc: ISensorFunction = config.functionProcessor
    private val qProc: ISensorQueue = config.queueProcessor
    private val sProc: ISensorStream = config.streamProcessor

    override fun retrieve(config: Retrieval.() -> Unit) = fProc.retrieve(config)
    override fun retrieveExperience(config: Experience.() -> Unit) = fProc.retrieveExperience(config)
    override fun retrieveKnowledge(config: Knowledge.() -> Unit) = fProc.retrieveKnowledge(config)
    override fun retrieveEdges(source: Uuid, config: Edge.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveEdges(source, config, limit, offset)
    override fun retrieveEdge(source: Uuid, edgeId: Uuid, config: Edge.() -> Unit) = fProc.retrieveEdge(source, edgeId, config)
    override fun retrieveIntents(identityId: Uuid, config: gaia.sdk.request.type.Intent.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveIntents(identityId, config, limit, offset)
    override fun retrieveIntent(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Intent.() -> Unit) = fProc.retrieveIntent(identityId, reference, config)
    override fun retrieveIdentities(config: gaia.sdk.request.type.Identity.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveIdentities(config, limit, offset)
    override fun retrieveIdentity(identityId: Uuid, config: gaia.sdk.request.type.Identity.() -> Unit) = fProc.retrieveIdentity(identityId, config)
    override fun retrieveTenants(config: gaia.sdk.request.type.Tenant.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveTenants(config, limit, offset)
    override fun retrieveTenant(tenantId: Uuid, config: gaia.sdk.request.type.Tenant.() -> Unit) = fProc.retrieveTenant(tenantId, config)
    override fun retrieveUsers(config: gaia.sdk.request.type.User.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveUsers(config, limit, offset)
    override fun retrieveUser(userId: Uuid, config: gaia.sdk.request.type.User.() -> Unit) = fProc.retrieveUser(userId, config)
    override fun retrieveApiKeys(config: gaia.sdk.request.type.ApiKey.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveApiKeys(config, limit, offset)
    override fun retrieveApiKey(apiKeyId: Uuid, config: gaia.sdk.request.type.ApiKey.() -> Unit) = fProc.retrieveApiKey(apiKeyId, config)
    override fun retrieveRoles(tenantId: Uuid, config: gaia.sdk.request.type.Role.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveRoles(tenantId, config, limit, offset)
    override fun retrieveRole(tenantId: Uuid, roleId: Uuid, config: gaia.sdk.request.type.Role.() -> Unit) = fProc.retrieveRole(tenantId, roleId, config)
    override fun retrievePrompts(identityId: Uuid, config: gaia.sdk.request.type.Prompt.() -> Unit, limit: Int?, offset: Long?) = fProc.retrievePrompts(identityId, config, limit, offset)
    override fun retrievePrompt(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Prompt.() -> Unit) = fProc.retrievePrompt(identityId, reference, config)
    override fun retrieveStatements(identityId: Uuid, config: gaia.sdk.request.type.Statement.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveStatements(identityId, config, limit, offset)
    override fun retrieveStatement(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Statement.() -> Unit) = fProc.retrieveStatement(identityId, reference, config)
    override fun retrieveFulfilments(identityId: Uuid, config: gaia.sdk.request.type.Fulfilment.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveFulfilments(identityId, config, limit, offset)
    override fun retrieveFulfilment(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Fulfilment.() -> Unit) = fProc.retrieveFulfilment(identityId, reference, config)
    override fun retrieveCodes(identityId: Uuid, config: gaia.sdk.request.type.Code.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveCodes(identityId, config, limit, offset)
    override fun retrieveCode(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Code.() -> Unit) = fProc.retrieveCode(identityId, reference, config)
    override fun retrieveBehaviours(identityId: Uuid, config: gaia.sdk.request.type.Behaviour.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveBehaviours(identityId, config, limit, offset)
    override fun retrieveBehaviour(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Behaviour.() -> Unit) = fProc.retrieveBehaviour(identityId, reference, config)
    override fun retrieveSkills(tenantId: Uuid, config: gaia.sdk.request.type.Skill.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveSkills(tenantId, config, limit, offset)
    override fun retrieveSkill(tenantId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Skill.() -> Unit) = fProc.retrieveSkill(tenantId, reference, config)
    override fun retrieveSkillProvisions(tenantId: Uuid, config: gaia.sdk.request.type.SkillProvision.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveSkillProvisions(tenantId, config, limit, offset)
    override fun retrieveSkillProvision(tenantId: Uuid, reference: Uuid, config: gaia.sdk.request.type.SkillProvision.() -> Unit) = fProc.retrieveSkillProvision(tenantId, reference, config)
    override fun retrieveBehaviourExecution(identityId: Uuid, processInstanceId: Uuid, config: BehaviourExecutionDetail.() -> Unit) = fProc.retrieveBehaviourExecution(identityId, processInstanceId, config)
    override fun retrieveBehaviourExecutions(identityId: Uuid, config: BehaviourExecution.() -> Unit, limit: Int?, offset: Long?, startDate: String?, endDate: String?) = fProc.retrieveBehaviourExecutions(identityId, config, limit, offset, startDate, endDate)
    override fun retrieveIdentityMetrics(identityId: Uuid, startDate: String, endDate: String, config: IdentityMetrics.() -> Unit, limit: Int?) = fProc.retrieveIdentityMetrics(identityId, startDate, endDate, config, limit)
    override fun retrieveBehaviourMetrics(identityId: Uuid, behaviourId: Uuid?, startDate: String, endDate: String, config: BehaviourMetrics.() -> Unit, limit: Int?) = fProc.retrieveBehaviourMetrics(identityId, behaviourId, startDate, endDate, config, limit)
    override fun introspect(config: gaia.sdk.request.type.Introspection.() -> Unit) = fProc.introspect(config)
    override fun preserve(config: gaia.sdk.request.type.Preservation.() -> Unit) = fProc.preserve(config)
    override fun preserveCreateIdentities(vararg impulses: CreateIdentityImpulse) = fProc.preserveCreateIdentities(*impulses)
    override fun preserveUpdateIdentities(vararg impulses: UpdateIdentityImpulse) = fProc.preserveUpdateIdentities(*impulses)
    override fun preserveDeleteIdentities(vararg impulses: DeleteIdentityImpulse) = fProc.preserveDeleteIdentities(*impulses)
    override fun preserveCreateTenants(vararg impulses: CreateTenantImpulse): Publisher<CreatedTenantImpulse> = fProc.preserveCreateTenants(*impulses)
    override fun preserveUpdateTenants(vararg impulses: UpdateTenantImpulse): Publisher<UpdatedTenantImpulse> = fProc.preserveUpdateTenants(*impulses)
    override fun preserveDeleteTenants(vararg impulses: DeleteTenantImpulse): Publisher<DeletedTenantImpulse> = fProc.preserveDeleteTenants(*impulses)
    override fun preserveCreateUsers(vararg impulses: CreateUserImpulse): Publisher<CreatedUserImpulse> = fProc.preserveCreateUsers(*impulses)
    override fun preserveUpdateUsers(vararg impulses: UpdateUserImpulse): Publisher<UpdatedUserImpulse> = fProc.preserveUpdateUsers(*impulses)
    override fun preserveDeleteUsers(vararg impulses: DeleteUserImpulse): Publisher<DeletedUserImpulse> = fProc.preserveDeleteUsers(*impulses)
    override fun preserveCreateApiKeys(vararg impulses: CreateApiKeyImpulse): Publisher<CreatedApiKeyImpulse> = fProc.preserveCreateApiKeys(*impulses)
    override fun preserveUpdateApiKeys(vararg impulses: UpdateApiKeyImpulse): Publisher<UpdatedApiKeyImpulse> = fProc.preserveUpdateApiKeys(*impulses)
    override fun preserveDeleteApiKeys(vararg impulses: DeleteApiKeyImpulse): Publisher<DeletedApiKeyImpulse> = fProc.preserveDeleteApiKeys(*impulses)
    override fun preserveCreateRoles(vararg impulses: CreateRoleImpulse): Publisher<CreatedRoleImpulse> = fProc.preserveCreateRoles(*impulses)
    override fun preserveUpdateRoles(vararg impulses: UpdateRoleImpulse): Publisher<UpdatedRoleImpulse> = fProc.preserveUpdateRoles(*impulses)
    override fun preserveDeleteRoles(vararg impulses: DeleteRoleImpulse): Publisher<DeletedRoleImpulse> = fProc.preserveDeleteRoles(*impulses)
    override fun preserveCreateIntents(vararg impulses: CreateIntentImpulse) = fProc.preserveCreateIntents(*impulses)
    override fun preserveUpdateIntents(vararg impulses: UpdateIntentImpulse) = fProc.preserveUpdateIntents(*impulses)
    override fun preserveDeleteIntents(vararg impulses: DeleteIntentImpulse) = fProc.preserveDeleteIntents(*impulses)
    override fun preserveCreatePrompts(vararg impulses: CreatePromptImpulse) = fProc.preserveCreatePrompts(*impulses)
    override fun preserveUpdatePrompts(vararg impulses: UpdatePromptImpulse) = fProc.preserveUpdatePrompts(*impulses)
    override fun preserveDeletePrompts(vararg impulses: DeletePromptImpulse) = fProc.preserveDeletePrompts(*impulses)
    override fun preserveCreateStatements(vararg impulses: CreateStatementImpulse) = fProc.preserveCreateStatements(*impulses)
    override fun preserveUpdateStatements(vararg impulses: UpdateStatementImpulse) = fProc.preserveUpdateStatements(*impulses)
    override fun preserveDeleteStatements(vararg impulses: DeleteStatementImpulse) = fProc.preserveDeleteStatements(*impulses)
    override fun preserveCreateFulfilments(vararg impulses: CreateFulfilmentImpulse) = fProc.preserveCreateFulfilments(*impulses)
    override fun preserveUpdateFulfilments(vararg impulses: UpdateFulfilmentImpulse) = fProc.preserveUpdateFulfilments(*impulses)
    override fun preserveDeleteFulfilments(vararg impulses: DeleteFulfilmentImpulse) = fProc.preserveDeleteFulfilments(*impulses)
    override fun preserveCreateBehaviours(vararg impulses: CreateBehaviourImpulse) = fProc.preserveCreateBehaviours(*impulses)
    override fun preserveUpdateBehaviours(vararg impulses: UpdateBehaviourImpulse) = fProc.preserveUpdateBehaviours(*impulses)
    override fun preserveDeleteBehaviours(vararg impulses: DeleteBehaviourImpulse) = fProc.preserveDeleteBehaviours(*impulses)
    override fun preserveCreateCodes(vararg impulses: CreateCodeImpulse) = fProc.preserveCreateCodes(*impulses)
    override fun preserveUpdateCodes(vararg impulses: UpdateCodeImpulse) = fProc.preserveUpdateCodes(*impulses)
    override fun preserveDeleteCodes(vararg impulses: DeleteCodeImpulse) = fProc.preserveDeleteCodes(*impulses)
    override fun preserveCreateEdges(vararg impulses: CreateEdgeImpulse) = fProc.preserveCreateEdges(*impulses)
    override fun preserveDeleteEdges(vararg impulses: DeleteEdgeImpulse) = fProc.preserveDeleteEdges(*impulses)
    override fun preserveCreateSkills(vararg impulses: CreateSkillImpulse) = fProc.preserveCreateSkills(*impulses)
    override fun preserveUpdateSkills(vararg impulses: UpdateSkillImpulse) = fProc.preserveUpdateSkills(*impulses)
    override fun preserveDeleteSkills(vararg impulses: DeleteSkillImpulse) = fProc.preserveDeleteSkills(*impulses)
    override fun preserveCreateSkillProvisions(vararg impulses: CreateSkillProvisionImpulse) = fProc.preserveCreateSkillProvisions(*impulses)
    override fun preserveUpdateSkillProvisions(vararg impulses: UpdateSkillProvisionImpulse) = fProc.preserveUpdateSkillProvisions(*impulses)
    override fun preserveDeleteSkillProvisions(vararg impulses: DeleteSkillProvisionImpulse) = fProc.preserveDeleteSkillProvisions(*impulses)
    override fun preserveConnectNodeSet(nodeId: Uuid, impulse: ConnectSetNodeImpulse) = fProc.preserveConnectNodeSet(nodeId, impulse);
    override fun preserveConnectNodeUnset(nodeId: Uuid, impulse: ConnectUnsetNodeImpulse) = fProc.preserveConnectNodeUnset(nodeId, impulse);
    override fun preserveConnectNodeAppend(nodeId: Uuid, impulse: ConnectAppendNodeImpulse) = fProc.preserveConnectNodeAppend(nodeId, impulse);
    override fun preserveConnectNodeRemove(nodeId: Uuid, impulse: ConnectRemoveNodeImpulse) = fProc.preserveConnectNodeRemove(nodeId, impulse);
    override fun perceive(config: gaia.sdk.request.type.Perception.() -> Unit) = fProc.perceive(config)
    override fun perceiveAction(impulse: PerceiveActionImpulse) = fProc.perceiveAction(impulse)
    override fun perceiveData(impulse: PerceiveDataImpulse) = fProc.perceiveData(impulse)
    override fun introspectBuildJobs(tenantId: Uuid, config: (gaia.sdk.request.type.SkillBuildJob.() -> Unit)?): Publisher<SkillBuildJob> = fProc.introspectBuildJobs(tenantId, config)
    override fun practice(config: gaia.sdk.request.type.Practice.() -> Unit): Publisher<Practice> = fProc.practice(config)
    override fun practiceBuild(impulse: CreateSkillBuildJobImpulse, config: (gaia.sdk.request.type.CreatedSkillBuildJobImpulse.() -> Unit)?): Publisher<CreatedSkillBuildJobImpulse> =
            fProc.practiceBuild(impulse, config)
    override fun practiceCancel(impulse: CancelSkillBuildJobImpulse, config: (gaia.sdk.request.type.CanceledSkillBuildJobImpulse.() -> Unit)?): Publisher<CanceledSkillBuildJobImpulse> =
            fProc.practiceCancel(impulse, config)

    // data api
    override fun data(url: String) = sProc.data(url)
    // identity api
    override fun identity() = sProc.identity()
    // skill api
    override fun skill(url: String) = sProc.skill(url)
}

class UsernamePasswordCredentials(val username: String, val password: String)
data class LoginResponse @JsonCreator constructor(
        @JsonProperty("username") val username: String,
        @JsonProperty("accessToken") val accessToken: String
)
