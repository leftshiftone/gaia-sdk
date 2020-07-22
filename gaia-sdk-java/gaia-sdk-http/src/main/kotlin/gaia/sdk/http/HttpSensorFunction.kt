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
import reactor.netty.http.client.HttpClient

class HttpSensorFunction(url: String, credentials: GaiaCredentials) : ISensorFunction {

    private val client = GaiaClientBuilder(HttpTransporter(url + "/api/sync", HttpClient.create()))
            .withCredentials(credentials)
            .build()

    override fun retrieve(config: Retrieval.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve(config) })) { it.retrieve!! }

    override fun retrieveKnowledge(config: Knowledge.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge(config) } })) { it.retrieve?.knowledge!! }

    override fun retrieveExperience(config: Experience.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { experience(config) } })) { it.retrieve?.experience!! }

    override fun retrieveEdges(source: Uuid, config: Edge.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { edges(source, config) } } })) { it.retrieve?.knowledge?.edges!! }

    override fun retrieveEdge(source: Uuid, target: Uuid, config: Edge.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { edge(source, target, config) } } })) { it.retrieve?.knowledge?.edge!! }

    override fun retrieveIdentities(config: Identity.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { identities(config) } } })) { it.retrieve?.knowledge?.identities!! }

    override fun retrieveIdentity(identityId: Uuid, config: Identity.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { identity(identityId, config) } } })) { it.retrieve?.knowledge?.identity!! }

    override fun retrieveIntents(identityId: Uuid, config: Intent.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { intents(identityId, config) } } })) { it.retrieve?.knowledge?.intents!! }

    override fun retrieveIntent(identityId: Uuid, reference: Uuid, config: Intent.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { intent(identityId, reference, config) } } })) { it.retrieve?.knowledge?.intent!! }

    override fun retrievePrompts(identityId: Uuid, config: Prompt.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { prompts(identityId, config) } } })) { it.retrieve?.knowledge?.prompts!! }

    override fun retrievePrompt(identityId: Uuid, reference: Uuid, config: Prompt.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { prompt(identityId, reference, config) } } })) { it.retrieve?.knowledge?.prompt!! }

    override fun retrieveStatements(identityId: Uuid, config: Statement.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { statements(identityId, config) } } })) { it.retrieve?.knowledge?.statements!! }

    override fun retrieveStatement(identityId: Uuid, reference: Uuid, config: Statement.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { statement(identityId, reference, config) } } })) { it.retrieve?.knowledge?.statement!! }

    override fun retrieveFulfilments(identityId: Uuid, config: Fulfilment.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { fulfilments(identityId, config) } } })) { it.retrieve?.knowledge?.fulfilments!! }

    override fun retrieveFulfilment(identityId: Uuid, reference: Uuid, config: Fulfilment.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { fulfilment(identityId, reference, config) } } })) { it.retrieve?.knowledge?.fulfilment!! }

    override fun retrieveCodes(identityId: Uuid, config: Code.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { codes(identityId, config) } } })) { it.retrieve?.knowledge?.codes!! }

    override fun retrieveCode(identityId: Uuid, reference: Uuid, config: Code.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { code(identityId, reference, config) } } })) { it.retrieve?.knowledge?.code!! }

    override fun retrieveBehaviours(identityId: Uuid, config: Behaviour.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { behaviours(identityId, config) } } })) { it.retrieve?.knowledge?.behaviours!! }

    override fun retrieveBehaviour(identityId: Uuid, reference: Uuid, config: Behaviour.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge { behaviour(identityId, reference, config) } } })) { it.retrieve?.knowledge?.behaviour!! }

    override fun introspect(config: Introspection.() -> Unit) =
            map(client.query(GaiaRequest.query { introspect(config) })) { it.introspect!! }

    override fun introspectSkills(config: SkillIntrospection.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { introspect { skills(config) } })) { it.introspect?.skills!! }

    override fun preserve(config: Preservation.() -> Unit) =
            mapM(client.mutation(GaiaRequest.mutation { preserve(config) })) { it.preserve!! }

    override fun preserveCreateIdentities(vararg impulses: CreateIdentityImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { create { identities(impulses) { id() } } } })) {
                it.preserve?.create?.identities!!
            }

    override fun preserveUpdateIdentities(vararg impulses: UpdateIdentityImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { update { identities(impulses) { id() } } } })) {
                it.preserve?.update?.identities!!
            }

    override fun preserveDeleteIdentities(vararg impulses: DeleteIdentityImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { delete { identities(impulses) { id() } } } })) {
                it.preserve?.delete?.identities!!
            }

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

    override fun preserveCreateEdges(vararg impulses: CreateEdgeImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { create { edges(impulses) { id() } } } })) {
                it.preserve?.create?.edges!!
            }

    override fun preserveDeleteEdges(vararg impulses: DeleteEdgeImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { delete { edges(impulses) { id() } } } })) {
                it.preserve?.delete?.edges!!
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
