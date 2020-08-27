package gaia.sdk.core

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.*
import gaia.sdk.api.ISensorFunction
import gaia.sdk.api.ISensorQueue
import gaia.sdk.api.ISensorStream
import gaia.sdk.api.skill.ISkillSpec
import gaia.sdk.api.skill.ProvisionedSkillSpec
import gaia.sdk.api.skill.SkillRef
import gaia.sdk.api.skill.UnprovisionedSkillSpec
import gaia.sdk.http.HttpSensorFunction
import gaia.sdk.http.HttpSensorStream
import gaia.sdk.http.HttpTransportException
import gaia.sdk.mqtt.MqttSensorQueue
import gaia.sdk.request.input.*
import gaia.sdk.request.type.Edge
import gaia.sdk.request.type.Experience
import gaia.sdk.request.type.Knowledge
import gaia.sdk.request.type.Retrieval
import gaia.sdk.spi.QueueOptions
import io.netty.buffer.Unpooled
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.netty.http.client.HttpClient
import java.io.ByteArrayOutputStream

class Gaia {
    companion object {

        private val jsonparser = ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)

        fun connect(url: String, credentials: GaiaCredentials): GaiaRef {
            return GaiaRef(GaiaConfig(url, credentials))
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

        /**
         *

        public static login(url: string, credentials: UsernamePasswordCredentials): Promise<GaiaRef> {
        return new HttpClient()
        .post(JSON.stringify(credentials), {
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
        }
        }, url + "/api/auth/access")
        .then(response => {
        let cr = new JWTCredentials(response.accessToken);
        return new GaiaRef(new GaiaConfig(url, cr))
        })
        }
         */
    }
}



class GaiaConfig(val url: String,
                 val credentials: GaiaCredentials,
                 val functionProcessor: ISensorFunction = HttpSensorFunction(url, credentials),
                 val queueProcessor: ISensorQueue = MqttSensorQueue(QueueOptions("localhost", 1883)),
                 val streamProcessor: ISensorStream = HttpSensorStream(url, credentials))

class GaiaRef(config: GaiaConfig) : ISensorFunction {
    private val fProc: ISensorFunction = config.functionProcessor
    private val qProc: ISensorQueue = config.queueProcessor
    private val sProc: ISensorStream = config.streamProcessor

    override fun retrieve(config: Retrieval.() -> Unit) = fProc.retrieve(config)
    override fun retrieveExperience(config: Experience.() -> Unit) = fProc.retrieveExperience(config)
    override fun retrieveKnowledge(config: Knowledge.() -> Unit) = fProc.retrieveKnowledge(config)
    override fun retrieveEdges(source: Uuid, config: Edge.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveEdges(source, config, limit, offset)
    override fun retrieveEdge(source: Uuid, target: Uuid, config: Edge.() -> Unit) = fProc.retrieveEdge(source, target, config)
    override fun retrieveIntents(identityId: Uuid, config: gaia.sdk.request.type.Intent.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveIntents(identityId, config, limit, offset)
    override fun retrieveIntent(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Intent.() -> Unit) = fProc.retrieveIntent(identityId, reference, config)
    override fun retrieveIdentities(config: gaia.sdk.request.type.Identity.() -> Unit, limit: Int?, offset: Long?) = fProc.retrieveIdentities(config, limit, offset)
    override fun retrieveIdentity(identityId: Uuid, config: gaia.sdk.request.type.Identity.() -> Unit) = fProc.retrieveIdentity(identityId, config)
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
    override fun introspect(config: gaia.sdk.request.type.Introspection.() -> Unit) = fProc.introspect(config)
    override fun introspectSkills(config: gaia.sdk.request.type.SkillIntrospection.() -> Unit) = fProc.introspectSkills(config)
    override fun preserve(config: gaia.sdk.request.type.Preservation.() -> Unit) = fProc.preserve(config)
    override fun preserveCreateIdentities(vararg impulses: CreateIdentityImpulse) = fProc.preserveCreateIdentities(*impulses)
    override fun preserveUpdateIdentities(vararg impulses: UpdateIdentityImpulse) = fProc.preserveUpdateIdentities(*impulses)
    override fun preserveDeleteIdentities(vararg impulses: DeleteIdentityImpulse) = fProc.preserveDeleteIdentities(*impulses)
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
    override fun perceive(config: gaia.sdk.request.type.Perception.() -> Unit) = fProc.perceive(config)
    override fun perceiveAction(impulse: PerceiveActionImpulse) = fProc.perceiveAction(impulse)
    override fun perceiveData(impulse: PerceiveDataImpulse) = fProc.perceiveData(impulse)


    // skill api
    fun skill(url: String) = SkillRef(ISkillSpec.toSkillSpec(url), sProc)
    fun skill(spec: UnprovisionedSkillSpec) = SkillRef(spec, sProc)
    fun skill(spec: ProvisionedSkillSpec) = SkillRef(spec, sProc)
}
