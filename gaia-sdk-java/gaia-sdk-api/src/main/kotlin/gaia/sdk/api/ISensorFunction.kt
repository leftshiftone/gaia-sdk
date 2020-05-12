package gaia.sdk.api

import gaia.sdk.Uuid
import gaia.sdk.request.input.*
import gaia.sdk.request.type.*
import org.reactivestreams.Publisher

interface ISensorFunction {
    fun retrieve(config: Retrieval.() -> Unit): Publisher<gaia.sdk.response.type.Retrieval>
    fun retrieveExperience(config: Experience.() -> Unit): Publisher<gaia.sdk.response.type.Experience>
    fun retrieveKnowledge(config: Knowledge.() -> Unit): Publisher<gaia.sdk.response.type.Knowledge>
    fun retrieveKnowledgeEdge(config: KnowledgeEdge.() -> Unit): Publisher<gaia.sdk.response.type.KnowledgeEdge>
    fun retrieveIntents(identityId: Uuid, config: Intent.() -> Unit): Publisher<gaia.sdk.response.type.Intent>
    fun retrieveIntent(identityId: Uuid, reference: Uuid, config: Intent.() -> Unit): Publisher<gaia.sdk.response.type.Intent>
    fun retrievePrompts(identityId: Uuid, config: Prompt.() -> Unit): Publisher<gaia.sdk.response.type.Prompt>
    fun retrievePrompt(identityId: Uuid, reference: Uuid, config: Prompt.() -> Unit): Publisher<gaia.sdk.response.type.Prompt>
    fun retrieveStatements(identityId: Uuid, config: Statement.() -> Unit): Publisher<gaia.sdk.response.type.Statement>
    fun retrieveStatement(identityId: Uuid, reference: Uuid, config: Statement.() -> Unit): Publisher<gaia.sdk.response.type.Statement>
    fun retrieveFulfilments(identityId: Uuid, config: Fulfilment.() -> Unit): Publisher<gaia.sdk.response.type.Fulfilment>
    fun retrieveFulfilment(identityId: Uuid, reference: Uuid, config: Fulfilment.() -> Unit): Publisher<gaia.sdk.response.type.Fulfilment>
    fun retrieveCodes(identityId: Uuid, config: Code.() -> Unit): Publisher<gaia.sdk.response.type.Code>
    fun retrieveCode(identityId: Uuid, reference: Uuid, config: Code.() -> Unit): Publisher<gaia.sdk.response.type.Code>
    fun retrieveBehaviours(identityId: Uuid, config: Behaviour.() -> Unit): Publisher<gaia.sdk.response.type.Behaviour>
    fun retrieveBehaviour(identityId: Uuid, reference: Uuid, config: Behaviour.() -> Unit): Publisher<gaia.sdk.response.type.Behaviour>
    fun introspect(config: Introspection.() -> Unit): Publisher<gaia.sdk.response.type.Introspection>
    fun introspectSkills(config: SkillIntrospection.() -> Unit): Publisher<gaia.sdk.response.type.SkillIntrospection>
    fun preserve(config: Preservation.() -> Unit): Publisher<gaia.sdk.response.type.Preservation>
    fun preserveCreateIntents(vararg impulses: CreateIntentImpulse): Publisher<gaia.sdk.response.type.CreatedIntentImpulse>
    fun preserveUpdateIntents(vararg impulses: UpdateIntentImpulse): Publisher<gaia.sdk.response.type.UpdatedIntentImpulse>
    fun preserveDeleteIntents(vararg impulses: DeleteIntentImpulse): Publisher<gaia.sdk.response.type.DeletedIntentImpulse>
    fun preserveCreatePrompts(vararg impulses: CreatePromptImpulse): Publisher<gaia.sdk.response.type.CreatedPromptImpulse>
    fun preserveUpdatePrompts(vararg impulses: UpdatePromptImpulse): Publisher<gaia.sdk.response.type.UpdatedPromptImpulse>
    fun preserveDeletePrompts(vararg impulses: DeletePromptImpulse): Publisher<gaia.sdk.response.type.DeletedPromptImpulse>
    fun preserveCreateStatements(vararg impulses: CreateStatementImpulse): Publisher<gaia.sdk.response.type.CreatedStatementImpulse>
    fun preserveUpdateStatements(vararg impulses: UpdateStatementImpulse): Publisher<gaia.sdk.response.type.UpdatedStatementImpulse>
    fun preserveDeleteStatements(vararg impulses: DeleteStatementImpulse): Publisher<gaia.sdk.response.type.DeletedStatementImpulse>
    fun preserveCreateFulfilments(vararg impulses: CreateFulfilmentImpulse): Publisher<gaia.sdk.response.type.CreatedFulfilmentImpulse>
    fun preserveUpdateFulfilments(vararg impulses: UpdateFulfilmentImpulse): Publisher<gaia.sdk.response.type.UpdatedFulfilmentImpulse>
    fun preserveDeleteFulfilments(vararg impulses: DeleteFulfilmentImpulse): Publisher<gaia.sdk.response.type.DeletedFulfilmentImpulse>
    fun preserveCreateBehaviours(vararg impulses: CreateBehaviourImpulse): Publisher<gaia.sdk.response.type.CreatedBehaviourImpulse>
    fun preserveUpdateBehaviours(vararg impulses: UpdateBehaviourImpulse): Publisher<gaia.sdk.response.type.UpdatedBehaviourImpulse>
    fun preserveDeleteBehaviours(vararg impulses: DeleteBehaviourImpulse): Publisher<gaia.sdk.response.type.DeletedBehaviourImpulse>
    fun preserveCreateCodes(vararg impulses: CreateCodeImpulse): Publisher<gaia.sdk.response.type.CreatedCodeImpulse>
    fun preserveUpdateCodes(vararg impulses: UpdateCodeImpulse): Publisher<gaia.sdk.response.type.UpdatedCodeImpulse>
    fun preserveDeleteCodes(vararg impulses: DeleteCodeImpulse): Publisher<gaia.sdk.response.type.DeletedCodeImpulse>
    fun perceive(config: Perception.() -> Unit): Publisher<gaia.sdk.response.type.Perception>
    fun perceiveAction(impulse: PerceiveActionImpulse): Publisher<gaia.sdk.response.type.PerceivedImpulse>
    fun perceiveData(impulse: PerceiveDataImpulse): Publisher<gaia.sdk.response.type.PerceivedImpulse>
}
