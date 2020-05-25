package gaia.sdk.http

import gaia.sdk.Uuid
import gaia.sdk.api.ISensorFunction
import gaia.sdk.request.input.*
import gaia.sdk.request.type.Experience
import gaia.sdk.request.type.Knowledge
import gaia.sdk.request.type.KnowledgeEdge
import gaia.sdk.request.type.Retrieval

class Gaia {
    companion object {
        fun connect(url: String, apiKey: String, apiSecret: String): GaiaRef {
            return GaiaRef(GaiaConfig(url, apiKey, apiSecret))
        }
    }
}

class GaiaConfig(val url: String,
                 val apiKey: String,
                 val apiSecret: String,
                 val functionProcessor: ISensorFunction = HttpSensorFunction(url, apiKey, apiSecret))

class GaiaRef(config: GaiaConfig) : ISensorFunction {
    private val fProc: ISensorFunction = config.functionProcessor

    override fun retrieve(config: Retrieval.() -> Unit) = fProc.retrieve(config)
    override fun retrieveExperience(config: Experience.() -> Unit) = fProc.retrieveExperience(config)
    override fun retrieveKnowledge(config: Knowledge.() -> Unit) = fProc.retrieveKnowledge(config)
    override fun retrieveKnowledgeEdges(source: Uuid, config: KnowledgeEdge.() -> Unit) = fProc.retrieveKnowledgeEdges(source, config)
    override fun retrieveKnowledgeEdge(source: Uuid, target: Uuid, config: KnowledgeEdge.() -> Unit) = fProc.retrieveKnowledgeEdge(source, target, config)
    override fun retrieveIntents(identityId: Uuid, config: gaia.sdk.request.type.Intent.() -> Unit) = fProc.retrieveIntents(identityId, config)
    override fun retrieveIntent(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Intent.() -> Unit) = fProc.retrieveIntent(identityId, reference, config)
    override fun retrievePrompts(identityId: Uuid, config: gaia.sdk.request.type.Prompt.() -> Unit) = fProc.retrievePrompts(identityId, config)
    override fun retrievePrompt(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Prompt.() -> Unit) = fProc.retrievePrompt(identityId, reference, config)
    override fun retrieveStatements(identityId: Uuid, config: gaia.sdk.request.type.Statement.() -> Unit) = fProc.retrieveStatements(identityId, config)
    override fun retrieveStatement(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Statement.() -> Unit) = fProc.retrieveStatement(identityId, reference, config)
    override fun retrieveFulfilments(identityId: Uuid, config: gaia.sdk.request.type.Fulfilment.() -> Unit) = fProc.retrieveFulfilments(identityId, config)
    override fun retrieveFulfilment(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Fulfilment.() -> Unit) = fProc.retrieveFulfilment(identityId, reference, config)
    override fun retrieveCodes(identityId: Uuid, config: gaia.sdk.request.type.Code.() -> Unit) = fProc.retrieveCodes(identityId, config)
    override fun retrieveCode(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Code.() -> Unit) = fProc.retrieveCode(identityId, reference, config)
    override fun retrieveBehaviours(identityId: Uuid, config: gaia.sdk.request.type.Behaviour.() -> Unit) = fProc.retrieveBehaviours(identityId, config)
    override fun retrieveBehaviour(identityId: Uuid, reference: Uuid, config: gaia.sdk.request.type.Behaviour.() -> Unit) = fProc.retrieveBehaviour(identityId, reference, config)
    override fun introspect(config: gaia.sdk.request.type.Introspection.() -> Unit) = fProc.introspect(config)
    override fun introspectSkills(config: gaia.sdk.request.type.SkillIntrospection.() -> Unit) = fProc.introspectSkills(config)
    override fun preserve(config: gaia.sdk.request.type.Preservation.() -> Unit) = fProc.preserve(config)
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
    override fun preserveCreateKnowledgeEdges(vararg impulses: CreateKnowledgeEdgeImpulse) = fProc.preserveCreateKnowledgeEdges(*impulses)
    override fun preserveDeleteKnowledgeEdges(vararg impulses: DeleteKnowledgeEdgeImpulse) = fProc.preserveDeleteKnowledgeEdges(*impulses)
    override fun perceive(config: gaia.sdk.request.type.Perception.() -> Unit) = fProc.perceive(config)
    override fun perceiveAction(impulse: PerceiveActionImpulse) = fProc.perceiveAction(impulse)
    override fun perceiveData(impulse: PerceiveDataImpulse) = fProc.perceiveData(impulse)

}
