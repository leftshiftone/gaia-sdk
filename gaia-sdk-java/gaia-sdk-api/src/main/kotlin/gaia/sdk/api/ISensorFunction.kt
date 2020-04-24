package gaia.sdk.api

import gaia.sdk.request.input.*
import gaia.sdk.request.type.*
import org.reactivestreams.Publisher

interface ISensorFunction {
    fun retrieve(config: Retrieval.() -> Unit): Publisher<gaia.sdk.response.type.Retrieval>
    fun retrieveExperience(config: Experience.() -> Unit): Publisher<gaia.sdk.response.type.Experience>
    fun retrieveKnowledge(config: Knowledge.() -> Unit): Publisher<gaia.sdk.response.type.Knowledge>
    fun retrieveKnowledgeEdge(config: KnowledgeEdge.() -> Unit): Publisher<gaia.sdk.response.type.KnowledgeEdge>
    fun retrieveIntents(config: Intent.() -> Unit): Publisher<gaia.sdk.response.type.Intent>
    fun retrievePrompts(config: Prompt.() -> Unit): Publisher<gaia.sdk.response.type.Prompt>
    fun retrieveStatements(config: Statement.() -> Unit): Publisher<gaia.sdk.response.type.Statement>
    fun retrieveFulfilments(config: Fulfilment.() -> Unit): Publisher<gaia.sdk.response.type.Fulfilment>
    fun retrieveCode(config: Code.() -> Unit): Publisher<gaia.sdk.response.type.Code>
    fun retrieveBehaviour(config: Behaviour.() -> Unit): Publisher<gaia.sdk.response.type.Behaviour>
    fun introspect(config: Introspection.() -> Unit): Publisher<gaia.sdk.response.type.Introspection>
    fun introspectSkills(config: SkillIntrospection.() -> Unit): Publisher<gaia.sdk.response.type.SkillIntrospection>
    fun preserve(config: Preservation.() -> Unit): Publisher<gaia.sdk.response.type.Preservation>
    fun preserveDeleteIntents(vararg impulses: CreateIntentImpulse): Publisher<gaia.sdk.response.type.CreatedIntentImpulse>
    fun preserveUpdateIntents(vararg impulses: UpdateIntentImpulse): Publisher<gaia.sdk.response.type.UpdatedIntentImpulse>
    fun preserveDeleteIntents(vararg impulses: DeleteIntentImpulse): Publisher<gaia.sdk.response.type.DeletedIntentImpulse>
    fun perceive(config: Perception.() -> Unit): Publisher<gaia.sdk.response.type.Perception>
    fun perceiveAction(impulse: PerceiveActionImpulse): Publisher<gaia.sdk.response.type.PerceivedImpulse>
    fun perceiveData(impulse: PerceiveDataImpulse): Publisher<gaia.sdk.response.type.PerceivedImpulse>
}
