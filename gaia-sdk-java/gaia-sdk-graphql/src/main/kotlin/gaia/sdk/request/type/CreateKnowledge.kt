package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class CreateKnowledge: Type() {

    /**
     * creates a list of identities with the given specifications
     */
    fun identities(impulses : Array<out CreateIdentityImpulse>?, config: CreatedIdentityImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "identities(impulses:$name1){" + CreatedIdentityImpulse().apply(config).render(it) + "}"
    }

    /**
     * creates a list of intents with the given specifications
     */
    fun intents(impulses : Array<out CreateIntentImpulse>?, config: CreatedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "intents(impulses:$name1){" + CreatedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * creates a list of prompts with the given specifications
     */
    fun prompts(impulses : Array<out CreatePromptImpulse>?, config: CreatedPromptImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "prompts(impulses:$name1){" + CreatedPromptImpulse().apply(config).render(it) + "}"
    }

    /**
     * creates a list of statements with the given specifications
     */
    fun statements(impulses : Array<out CreateStatementImpulse>?, config: CreatedStatementImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "statements(impulses:$name1){" + CreatedStatementImpulse().apply(config).render(it) + "}"
    }

    /**
     * creates a list of fulfilments with the given specifications
     */
    fun fulfilments(impulses : Array<out CreateFulfilmentImpulse>?, config: CreatedFulfilmentImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "fulfilments(impulses:$name1){" + CreatedFulfilmentImpulse().apply(config).render(it) + "}"
    }

    /**
     * creates a list of behaviours with the given specifications
     */
    fun behaviours(impulses : Array<out CreateBehaviourImpulse>?, config: CreatedBehaviourImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "behaviours(impulses:$name1){" + CreatedBehaviourImpulse().apply(config).render(it) + "}"
    }

    /**
     * creates a list of codes with the given specifications
     */
    fun codes(impulses : Array<out CreateCodeImpulse>?, config: CreatedCodeImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "codes(impulses:$name1){" + CreatedCodeImpulse().apply(config).render(it) + "}"
    }

    /**
     * creates a list of edges with the given specifications
     */
    fun edges(impulses : Array<out CreateEdgeImpulse>?, config: CreatedEdgeImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "edges(impulses:$name1){" + CreatedEdgeImpulse().apply(config).render(it) + "}"
    }

    /**
     * creates a list of skills with the given specifications
     */
    fun skills(impulses : Array<out CreateSkillImpulse>?, config: CreatedSkillImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "skills(impulses:$name1){" + CreatedSkillImpulse().apply(config).render(it) + "}"
    }

    /**
     * creates a list of skill provisions with the given specifications
     */
    fun skillProvisions(impulses : Array<out CreateSkillProvisionImpulse>?, config: CreatedSkillProvisionImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "skillProvisions(impulses:$name1){" + CreatedSkillProvisionImpulse().apply(config).render(it) + "}"
    }
}

