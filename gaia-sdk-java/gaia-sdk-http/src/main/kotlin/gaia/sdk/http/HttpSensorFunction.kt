package gaia.sdk.http

import gaia.sdk.GaiaClientBuilder
import gaia.sdk.GaiaRequest
import gaia.sdk.api.ISensorFunction
import gaia.sdk.api.extension.flatMap
import gaia.sdk.api.extension.flatMapM
import gaia.sdk.api.extension.map
import gaia.sdk.api.extension.mapM
import gaia.sdk.request.input.*
import gaia.sdk.request.type.*
import reactor.netty.http.client.HttpClient

class HttpSensorFunction(url: String, apiKey: String, apiSecret: String) : ISensorFunction {

    private val client = GaiaClientBuilder(HttpTransport(url + "/api/sync", HttpClient.create()))
            .withApiKey(apiKey)
            .withSecret(apiSecret)
            .build()

    override fun retrieve(config: Retrieval.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve(config) })) { it.retrieve!! }

    override fun retrieveKnowledge(config: Knowledge.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge(config) } })) { it.retrieve?.knowledge!! }

    override fun retrieveExperience(config: Experience.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { experience(config) } })) { it.retrieve?.experience!! }

    override fun retrieveKnowledgeEdge(config: KnowledgeEdge.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { edges(config) } } })) { it.retrieve?.knowledge?.edges!! }

    override fun retrieveIntents(config: Intent.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { intents(config) } } })) { it.retrieve?.knowledge?.intents!! }

    override fun retrievePrompts(config: Prompt.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { prompts(config) } } })) { it.retrieve?.knowledge?.prompts!! }

    override fun retrieveStatements(config: Statement.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { statements(config) } } })) { it.retrieve?.knowledge?.statements!! }

    override fun retrieveFulfilments(config: Fulfilment.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { fulfilments(config) } } })) { it.retrieve?.knowledge?.fulfilments!! }

    override fun retrieveCode(config: Code.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { codes(config) } } })) { it.retrieve?.knowledge?.codes!! }

    override fun retrieveBehaviour(config: Behaviour.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { behaviours(config) } } })) { it.retrieve?.knowledge?.behaviours!! }

    override fun introspect(config: Introspection.() -> Unit) =
            map(client.query(GaiaRequest.query { introspect(config) })) { it.introspect!! }

    override fun introspectSkills(config: SkillIntrospection.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { introspect { skills(config) } })) { it.introspect?.skills!! }

    override fun preserve(config: Preservation.() -> Unit) =
            mapM(client.mutation(GaiaRequest.mutation { preserve(config) })) { it.preserve!! }

    override fun preserveCreateIntents(vararg impulses: CreateIntentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { create { intents(impulses) { id() } } } })) {
                it.preserve?.create?.intents!!
            }

    override fun preserveUpdateIntents(vararg impulses: UpdateIntentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { update { intents(impulses) { id() } } } })) {
                it.preserve?.update?.intents!!
            }

    override fun preserveDeleteIntents(vararg impulses: DeleteIntentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { delete { intents(impulses) { id() } } } })) {
                it.preserve?.delete?.intents!!
            }

    override fun preserveCreatePrompts(vararg impulses: CreatePromptImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { create { prompts(impulses) { id() } } } })) {
                it.preserve?.create?.prompts!!
            }

    override fun preserveUpdatePrompts(vararg impulses: UpdatePromptImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { update { prompts(impulses) { id() } } } })) {
                it.preserve?.update?.prompts!!
            }

    override fun preserveDeletePrompts(vararg impulses: DeletePromptImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { delete { prompts(impulses) { id() } } } })) {
                it.preserve?.delete?.prompts!!
            }


    override fun preserveCreateStatements(vararg impulses: CreateStatementImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { create { statements(impulses) { id() } } } })) {
                it.preserve?.create?.statements!!
            }

    override fun preserveUpdateStatements(vararg impulses: UpdateStatementImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { update { statements(impulses) { id() } } } })) {
                it.preserve?.update?.statements!!
            }

    override fun preserveDeleteStatements(vararg impulses: DeleteStatementImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { delete { statements(impulses) { id() } } } })) {
                it.preserve?.delete?.statements!!
            }

    override fun preserveCreateFulfilments(vararg impulses: CreateFulfilmentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { create { fulfilments(impulses) { id() } } } })) {
                it.preserve?.create?.fulfilments!!
            }

    override fun preserveUpdateFulfilments(vararg impulses: UpdateFulfilmentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { update { fulfilments(impulses) { id() } } } })) {
                it.preserve?.update?.fulfilments!!
            }

    override fun preserveDeleteFulfilments(vararg impulses: DeleteFulfilmentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { delete { fulfilments(impulses) { id() } } } })) {
                it.preserve?.delete?.fulfilments!!
            }

    override fun preserveCreateBehaviours(vararg impulses: CreateBehaviourImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { create { behaviours(impulses) { id() } } } })) {
                it.preserve?.create?.behaviours!!
            }

    override fun preserveUpdateBehaviours(vararg impulses: UpdateBehaviourImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { update { behaviours(impulses) { id() } } } })) {
                it.preserve?.update?.behaviours!!
            }

    override fun preserveDeleteBehaviours(vararg impulses: DeleteBehaviourImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { delete { behaviours(impulses) { id() } } } })) {
                it.preserve?.delete?.behaviours!!
            }

    override fun preserveCreateCodes(vararg impulses: CreateCodeImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { create { codes(impulses) { id() } } } })) {
                it.preserve?.create?.codes!!
            }

    override fun preserveUpdateCodes(vararg impulses: UpdateCodeImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { update { codes(impulses) { id() } } } })) {
                it.preserve?.update?.codes!!
            }

    override fun preserveDeleteCodes(vararg impulses: DeleteCodeImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { delete { codes(impulses) { id() } } } })) {
                it.preserve?.delete?.codes!!
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

}
