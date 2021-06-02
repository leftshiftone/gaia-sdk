package gaia.sdk.http

import gaia.sdk.GaiaClientBuilder
import gaia.sdk.GaiaCredentials
import gaia.sdk.GaiaRequest
import gaia.sdk.Uuid
import gaia.sdk.api.ISensorFunction
import gaia.sdk.api.extension.flatMap
import gaia.sdk.api.extension.flatMapM
import gaia.sdk.api.extension.map
import gaia.sdk.api.extension.mapM
import gaia.sdk.request.input.*
import gaia.sdk.request.type.*
import org.reactivestreams.Publisher

class HttpSensorFunction(url: String, credentials: GaiaCredentials, transporterFactory: TransporterFactory) : ISensorFunction {

    private val client = GaiaClientBuilder(transporterFactory.create(url + "/api/entity"))
            .withCredentials(credentials)
            .build()

    override fun retrieve(config: Retrieval.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve(config) })) { it.retrieve!! }

    override fun retrieveKnowledge(config: Knowledge.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge(config) } })) { it.retrieve?.knowledge!! }

    override fun retrieveExperience(config: Experience.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { experience(config) } })) { it.retrieve?.experience!! }

    override fun retrieveEdges(source: Uuid, config: Edge.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { edges(source, limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.edges!! }

    override fun retrieveEdge(source: Uuid, edgeId: Uuid, config: Edge.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { edge(source, edgeId, config) } } })) { it.retrieve?.knowledge?.edge!! }

    override fun retrieveIdentities(config: Identity.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { identities(limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.identities!! }

    override fun retrieveIdentity(identityId: Uuid, config: Identity.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { identity(identityId, config) } } })) { it.retrieve?.knowledge?.identity!! }

    override fun retrieveTenants(config: Tenant.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { tenants(limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.tenants!! }

    override fun retrieveTenant(tenantId: Uuid, config: Tenant.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { tenant(tenantId, config) } } })) { it.retrieve?.knowledge?.tenant!! }

    override fun retrieveUsers(config: User.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { users(limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.users!! }

    override fun retrieveUser(userId: Uuid, config: User.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { user(userId, config) } } })) { it.retrieve?.knowledge?.user!! }

    override fun retrieveApiKeys(config: ApiKey.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { apiKeys(limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.apiKeys!! }

    override fun retrieveApiKey(apiKeyId: Uuid, config: ApiKey.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { apiKey(apiKeyId, config) } } })) { it.retrieve?.knowledge?.apiKey!! }

    override fun retrieveRoles(tenantId: Uuid, config: Role.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { roles(tenantId, limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.roles!! }

    override fun retrieveRole(tenantId: Uuid, roleId: Uuid, config: Role.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { role(tenantId, roleId, config) } } })) { it.retrieve?.knowledge?.role!! }

    override fun retrieveIntents(identityId: Uuid, config: Intent.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { intents(identityId, limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.intents!! }

    override fun retrieveIntent(identityId: Uuid, reference: Uuid, config: Intent.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { intent(identityId, reference, config) } } })) { it.retrieve?.knowledge?.intent!! }

    override fun retrievePrompts(identityId: Uuid, config: Prompt.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { prompts(identityId, limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.prompts!! }

    override fun retrievePrompt(identityId: Uuid, reference: Uuid, config: Prompt.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { prompt(identityId, reference, config) } } })) { it.retrieve?.knowledge?.prompt!! }

    override fun retrieveStatements(identityId: Uuid, config: Statement.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { statements(identityId, limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.statements!! }

    override fun retrieveStatement(identityId: Uuid, reference: Uuid, config: Statement.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { statement(identityId, reference, config) } } })) { it.retrieve?.knowledge?.statement!! }

    override fun retrieveFulfilments(identityId: Uuid, config: Fulfilment.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { fulfilments(identityId, limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.fulfilments!! }

    override fun retrieveFulfilment(identityId: Uuid, reference: Uuid, config: Fulfilment.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { fulfilment(identityId, reference, config) } } })) { it.retrieve?.knowledge?.fulfilment!! }

    override fun retrieveCodes(identityId: Uuid, config: Code.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { codes(identityId, limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.codes!! }

    override fun retrieveCode(identityId: Uuid, reference: Uuid, config: Code.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { code(identityId, reference, config) } } })) { it.retrieve?.knowledge?.code!! }

    override fun retrieveBehaviours(identityId: Uuid, config: Behaviour.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { behaviours(identityId, limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.behaviours!! }

    override fun retrieveBehaviour(identityId: Uuid, reference: Uuid, config: Behaviour.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { behaviour(identityId, reference, config) } } })) { it.retrieve?.knowledge?.behaviour!! }

    override fun retrieveSkills(tenantId: Uuid, config: Skill.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { skills(tenantId, limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.skills!! }

    override fun retrieveSkill(tenantId: Uuid, reference: Uuid, config: Skill.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { skill(tenantId, reference, config) } } })) { it.retrieve?.knowledge?.skill!! }

    override fun retrieveSkillProvisions(tenantId: Uuid, config: SkillProvision.() -> Unit, limit: Int?, offset: Long?) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { skillProvisions(tenantId, limit, offset?.toInt(), null, null, config) } } })) { it.retrieve?.knowledge?.skillProvisions!! }

    override fun retrieveSkillProvision(tenantId: Uuid, reference: Uuid, config: SkillProvision.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { skillProvision(tenantId, reference, config) } } })) { it.retrieve?.knowledge?.skillProvision!! }

    override fun retrieveBehaviourExecution(identityId: Uuid, processInstanceId: Uuid, config: BehaviourExecutionDetail.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { experience { behaviourExecution(identityId, processInstanceId, config) } } })) { it.retrieve?.experience?.behaviourExecution!! }

    override fun retrieveIdentityMetrics(identityId: Uuid, startDate: String, endDate: String, config: IdentityMetrics.() -> Unit, limit: Int?): Publisher<gaia.sdk.response.type.IdentityMetrics> =
            map(client.query(GaiaRequest.query { retrieve { experience { identityMetrics(identityId, startDate, endDate, limit, config) } } })) { it.retrieve?.experience?.identityMetrics!! }

    override fun retrieveBehaviourMetrics(identityId: Uuid, behaviourId: Uuid?, startDate: String, endDate: String, config: BehaviourMetrics.() -> Unit, limit: Int?): Publisher<gaia.sdk.response.type.BehaviourMetrics> =
            map(client.query(GaiaRequest.query { retrieve { experience { behaviourMetrics(identityId, behaviourId, startDate, endDate, limit, config) } } })) { it.retrieve?.experience?.behaviourMetrics!! }

    override fun retrieveBehaviourExecutions(identityId: Uuid, config: BehaviourExecution.() -> Unit, limit: Int?, offset: Long?, startDate: String?, endDate: String?) =
            flatMap(client.query(GaiaRequest.query { retrieve { experience { behaviourExecutions(identityId, limit, offset?.toInt(), startDate, endDate, config) } } })) { it.retrieve?.experience?.behaviourExecutions!! }


    override fun introspect(config: Introspection.() -> Unit) =
            map(client.query(GaiaRequest.query { introspect(config) })) { it.introspect!! }

    override fun preserve(config: Preservation.() -> Unit) =
            mapM(client.mutation(GaiaRequest.mutation { preserve(config) })) { it.preserve!! }

    override fun preserveCreateIdentities(vararg impulses: CreateIdentityImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        identities(impulses) {
                            id()
                            data {
                                identityId()
                                tenantId()
                                qualifier()
                                availableLanguages()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.create?.identities!!
            }

    override fun preserveUpdateIdentities(vararg impulses: UpdateIdentityImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        identities(impulses) {
                            id()
                            data {
                                identityId()
                                tenantId()
                                qualifier()
                                availableLanguages()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.update?.identities!!
            }

    override fun preserveDeleteIdentities(vararg impulses: DeleteIdentityImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        identities(impulses) {
                            id()
                            data {
                                identityId()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.delete?.identities!!
            }

    override fun preserveCreateTenants(vararg impulses: CreateTenantImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        tenants(impulses) {
                            id()
                            data {
                                tenantId()
                                qualifier()
                                implicitIdentities()
                                explicitIdentities()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.create?.tenants!!
            }

    override fun preserveUpdateTenants(vararg impulses: UpdateTenantImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        tenants(impulses) {
                            id()
                            data {
                                tenantId()
                                qualifier()
                                implicitIdentities()
                                explicitIdentities()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.update?.tenants!!
            }

    override fun preserveDeleteTenants(vararg impulses: DeleteTenantImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        tenants(impulses) {
                            id()
                            data {
                                tenantId()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.delete?.tenants!!
            }

    override fun preserveCreateUsers(vararg impulses: CreateUserImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        users(impulses) {
                            id()
                            data {
                                userId()
                                username()
                                email()
                                firstName()
                                lastName()
                                tenants()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.create?.users!!
            }

    override fun preserveUpdateUsers(vararg impulses: UpdateUserImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        users(impulses) {
                            id()
                            data {
                                userId()
                                username()
                                email()
                                firstName()
                                lastName()
                                tenants()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.update?.users!!
            }

    override fun preserveDeleteUsers(vararg impulses: DeleteUserImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        users(impulses) {
                            id()
                            data {
                                userId()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.delete?.users!!
            }

    override fun preserveCreateApiKeys(vararg impulses: CreateApiKeyImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        apiKeys(impulses) {
                            id()
                            data {
                                apiKeyId()
                                name()
                                description()
                                secret()
                                enabled()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.create?.apiKeys!!
            }

    override fun preserveUpdateApiKeys(vararg impulses: UpdateApiKeyImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        apiKeys(impulses) {
                            id()
                            data {
                                apiKeyId()
                                name()
                                description()
                                enabled()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.update?.apiKeys!!
            }

    override fun preserveDeleteApiKeys(vararg impulses: DeleteApiKeyImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        apiKeys(impulses) {
                            id()
                            data {
                                apiKeyId()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.delete?.apiKeys!!
            }

    override fun preserveCreateRoles(vararg impulses: CreateRoleImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        roles(impulses) {
                            id()
                            data {
                                tenantId()
                                roleId()
                                name()
                                permissions()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.create?.roles!!
            }

    override fun preserveUpdateRoles(vararg impulses: UpdateRoleImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        roles(impulses) {
                            id()
                            data {
                                tenantId()
                                roleId()
                                name()
                                permissions()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.update?.roles!!
            }

    override fun preserveDeleteRoles(vararg impulses: DeleteRoleImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        roles(impulses) {
                            id()
                            data {
                                tenantId()
                                roleId()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.delete?.roles!!
            }

    override fun preserveCreateIntents(vararg impulses: CreateIntentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        intents(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                utterance()
                                labelList()
                                version()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.create?.intents!!
            }

    override fun preserveUpdateIntents(vararg impulses: UpdateIntentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        intents(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                utterance()
                                labelList()
                                version()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.update?.intents!!
            }

    override fun preserveDeleteIntents(vararg impulses: DeleteIntentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        intents(impulses) {
                            id()
                            data {
                                identityId()
                                reference()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.delete?.intents!!
            }

    override fun preserveCreatePrompts(vararg impulses: CreatePromptImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        prompts(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                utterance()
                                labelList()
                                version()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.create?.prompts!!
            }

    override fun preserveUpdatePrompts(vararg impulses: UpdatePromptImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        prompts(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                utterance()
                                labelList()
                                version()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.update?.prompts!!
            }

    override fun preserveDeletePrompts(vararg impulses: DeletePromptImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        prompts(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.delete?.prompts!!
            }


    override fun preserveCreateStatements(vararg impulses: CreateStatementImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        statements(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                utterance()
                                labelList()
                                version()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.create?.statements!!
            }

    override fun preserveUpdateStatements(vararg impulses: UpdateStatementImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        statements(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                utterance()
                                labelList()
                                version()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.update?.statements!!
            }

    override fun preserveDeleteStatements(vararg impulses: DeleteStatementImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        statements(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.delete?.statements!!
            }

    override fun preserveCreateFulfilments(vararg impulses: CreateFulfilmentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        fulfilments(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                utterance()
                                labelList()
                                version()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.create?.fulfilments!!
            }

    override fun preserveUpdateFulfilments(vararg impulses: UpdateFulfilmentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        fulfilments(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                utterance()
                                labelList()
                                version()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.update?.fulfilments!!
            }

    override fun preserveDeleteFulfilments(vararg impulses: DeleteFulfilmentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        fulfilments(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.delete?.fulfilments!!
            }

    override fun preserveCreateBehaviours(vararg impulses: CreateBehaviourImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        behaviours(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                behaviour()
                                labelList()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.create?.behaviours!!
            }

    override fun preserveUpdateBehaviours(vararg impulses: UpdateBehaviourImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        behaviours(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                behaviour()
                                labelList()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.update?.behaviours!!
            }

    override fun preserveDeleteBehaviours(vararg impulses: DeleteBehaviourImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        behaviours(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.delete?.behaviours!!
            }

    override fun preserveCreateCodes(vararg impulses: CreateCodeImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        codes(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                code()
                                type()
                                labelList()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.create?.codes!!
            }

    override fun preserveUpdateCodes(vararg impulses: UpdateCodeImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        codes(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                                qualifier()
                                appendent()
                                code()
                                type()
                                labelList()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.update?.codes!!
            }

    override fun preserveDeleteCodes(vararg impulses: DeleteCodeImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        codes(impulses) {
                            id()
                            data({
                                identityId()
                                reference()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.delete?.codes!!
            }

    override fun preserveCreateEdges(vararg impulses: CreateEdgeImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        edges(impulses) {
                            id()
                            data {
                                source()
                                target()
                                type()
                                weight()
                                edgeId()
                                properties()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.create?.edges!!
            }

    override fun preserveDeleteEdges(vararg impulses: DeleteEdgeImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        edges(impulses) {
                            id()
                            data {
                                source()
                                edgeId()
                            }
                        }
                    }
                }
            })) {
                it.preserve?.delete?.edges!!
            }


    override fun preserveCreateSkills(vararg impulses: CreateSkillImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        skills(impulses) {
                            id()
                            data({
                                tenantId()
                                reference()
                                qualifier()
                                appendent()
                                labelList()
                                repositoryUri()
                                repositoryType()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.create?.skills!!
            }

    override fun preserveUpdateSkills(vararg impulses: UpdateSkillImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        skills(impulses) {
                            id()
                            data({
                                tenantId()
                                reference()
                                qualifier()
                                appendent()
                                labelList()
                                repositoryUri()
                                repositoryType()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.update?.skills!!
            }

    override fun preserveDeleteSkills(vararg impulses: DeleteSkillImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        skills(impulses) {
                            id()
                            data({
                                tenantId()
                                reference()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.delete?.skills!!
            }


    override fun preserveCreateSkillProvisions(vararg impulses: CreateSkillProvisionImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    create {
                        skillProvisions(impulses) {
                            id()
                            data({
                                tenantId()
                                reference()
                                qualifier()
                                appendent()
                                labelList()
                                version()
                                skillRef()
                                cpu()
                                memory()
                                replicas()
                                enabled()
                                environment()
                                bootstrapTimeout()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.create?.skillProvisions!!
            }

    override fun preserveUpdateSkillProvisions(vararg impulses: UpdateSkillProvisionImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    update {
                        skillProvisions(impulses) {
                            id()
                            data({
                                tenantId()
                                reference()
                                qualifier()
                                appendent()
                                labelList()
                                version()
                                skillRef()
                                cpu()
                                memory()
                                replicas()
                                enabled()
                                environment()
                                bootstrapTimeout()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.update?.skillProvisions!!
            }

    override fun preserveDeleteSkillProvisions(vararg impulses: DeleteSkillProvisionImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    delete {
                        skillProvisions(impulses) {
                            id()
                            data({
                                tenantId()
                                reference()
                            })
                        }
                    }
                }
            })) {
                it.preserve?.delete?.skillProvisions!!
            }

    override fun preserveConnectNodeSet(nodeId: Uuid, impulse: ConnectSetNodeImpulse) =
            mapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    connect {
                        node(nodeId) {
                            set(impulse) {
                                id()
                                removedEdges({
                                    source()
                                    edgeId()
                                })
                                newEdge({
                                    source()
                                    target()
                                    edgeId()
                                    type()
                                    weight()
                                    properties()
                                })
                            }
                        }
                    }
                }
            })) {
                it.preserve?.connect?.node?.set!!
            }

    override fun preserveConnectNodeUnset(nodeId: Uuid, impulse: ConnectUnsetNodeImpulse) =
            mapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    connect {
                        node(nodeId) {
                            unset(impulse) {
                                id()
                                removedEdges({
                                    source()
                                    edgeId()
                                })
                            }
                        }
                    }
                }
            })) {
                it.preserve?.connect?.node?.unset!!
            }

    override fun preserveConnectNodeAppend(nodeId: Uuid, impulse: ConnectAppendNodeImpulse) =
            mapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    connect {
                        node(nodeId) {
                            append(impulse) {
                                id()
                                newEdge({
                                    source()
                                    target()
                                    edgeId()
                                    type()
                                    weight()
                                    properties()
                                })
                            }
                        }
                    }
                }
            })) {
                it.preserve?.connect?.node?.append!!
            }

    override fun preserveConnectNodeRemove(nodeId: Uuid, impulse: ConnectRemoveNodeImpulse) =
            mapM(client.mutation(GaiaRequest.mutation {
                preserve {
                    connect {
                        node(nodeId) {
                            remove(impulse) {
                                id()
                                removedEdges({
                                    source()
                                    edgeId()
                                })
                            }
                        }
                    }
                }
            })) {
                it.preserve?.connect?.node?.remove!!
            }

    override fun perceive(config: Perception.() -> Unit) =
            mapM(client.mutation(GaiaRequest.mutation { perceive(config) })) { it.perceive!! }

    override fun perceiveAction(impulse: PerceiveActionImpulse) =
            mapM(client.mutation(GaiaRequest.mutation { perceive { perceiveAction(impulse) { id() } } })) {
                it.perceive?.perceiveAction!!
            }

    override fun perceiveData(impulse: PerceiveDataImpulse) =
            mapM(client.mutation(GaiaRequest.mutation { perceive { perceiveData(impulse) { id() } } })) {
                it.perceive?.perceiveData!!
            }

    override fun introspectBuildJobs(tenantId: Uuid, config: (SkillBuildJob.() -> Unit)?): Publisher<gaia.sdk.response.type.SkillBuildJob> =
            if (config != null) {
                flatMap(client.query(GaiaRequest.query { introspect { buildJobs(tenantId, config) } })) {
                    it.introspect?.buildJobs!!
                }
            } else {
                flatMap(client.query(GaiaRequest.query {
                    introspect {
                        buildJobs(tenantId, {
                            name()
                            created()
                            skillRef()
                            tag()
                            tenantId()
                            reference()
                            status {
                                health()
                                pending()
                                running()
                                failures {
                                    affectedContainer()
                                    exitCode()
                                    reason()
                                    failureType()
                                }
                            }
                        })
                    }
                })) {
                    it.introspect?.buildJobs!!
                }
            }


    override fun practice(config: Practice.() -> Unit): Publisher<gaia.sdk.response.type.Practice> =
            mapM(client.mutation(GaiaRequest.mutation { practice(config) })) {
                it.practice!!
            }


    override fun practiceBuild(impulse: CreateSkillBuildJobImpulse, config: (CreatedSkillBuildJobImpulse.() -> Unit)?): Publisher<gaia.sdk.response.type.CreatedSkillBuildJobImpulse> =
            if (config != null) {
                mapM(client.mutation(GaiaRequest.mutation { practice { build(impulse, config) } })) {
                    it.practice?.build!!
                }
            } else {
                mapM(client.mutation(GaiaRequest.mutation {
                    practice {
                        build(impulse, {
                            id()
                            data {
                                name()
                                created()
                                reference()
                                skillRef()
                                tag()
                                tenantId()
                            }
                        })
                    }
                })) {
                    it.practice?.build!!
                }
            }

    override fun practiceCancel(impulse: CancelSkillBuildJobImpulse, config: (CanceledSkillBuildJobImpulse.() -> Unit)?): Publisher<gaia.sdk.response.type.CanceledSkillBuildJobImpulse> = if (config != null) {
        mapM(client.mutation(GaiaRequest.mutation { practice { cancel(impulse, config) } })) {
            it.practice?.cancel!!
        }
    } else {
        mapM(client.mutation(GaiaRequest.mutation {
            practice {
                cancel(impulse, {
                    id()
                    data {
                        tenantId()
                        tag()
                        skillRef()
                        created()
                        name()
                    }
                })
            }
        })) {
            it.practice?.cancel!!
        }
    }
}