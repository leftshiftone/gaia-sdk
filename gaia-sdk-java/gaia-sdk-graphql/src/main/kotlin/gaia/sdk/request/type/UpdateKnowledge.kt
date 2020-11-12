package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class UpdateKnowledge: Type() {

    /**
     * updates a list of identities with the given specifications
     */
    fun identities(impulses : Array<out UpdateIdentityImpulse>?, config: UpdatedIdentityImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "identities(impulses:$name1){" + UpdatedIdentityImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of tenants with the given specifications
     */
    fun tenants(impulses : Array<out UpdateTenantImpulse>?, config: UpdatedTenantImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "tenants(impulses:$name1){" + UpdatedTenantImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of users with the given specifications
     */
    fun users(impulses : Array<out UpdateUserImpulse>?, config: UpdatedUserImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "users(impulses:$name1){" + UpdatedUserImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of api keys with the given specifications
     */
    fun apiKeys(impulses : Array<out UpdateApiKeyImpulse>?, config: UpdatedApiKeyImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "apiKeys(impulses:$name1){" + UpdatedApiKeyImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of roles with the given specifications
     */
    fun roles(impulses : Array<out UpdateRoleImpulse>?, config: UpdatedRoleImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "roles(impulses:$name1){" + UpdatedRoleImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of intents with the given specifications
     */
    fun intents(impulses : Array<out UpdateIntentImpulse>?, config: UpdatedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "intents(impulses:$name1){" + UpdatedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of prompts with the given specifications
     */
    fun prompts(impulses : Array<out UpdatePromptImpulse>?, config: UpdatedPromptImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "prompts(impulses:$name1){" + UpdatedPromptImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of statements with the given specifications
     */
    fun statements(impulses : Array<out UpdateStatementImpulse>?, config: UpdatedStatementImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "statements(impulses:$name1){" + UpdatedStatementImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of fulfilments with the given specifications
     */
    fun fulfilments(impulses : Array<out UpdateFulfilmentImpulse>?, config: UpdatedFulfilmentImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "fulfilments(impulses:$name1){" + UpdatedFulfilmentImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of behaviours with the given specifications
     */
    fun behaviours(impulses : Array<out UpdateBehaviourImpulse>?, config: UpdatedBehaviourImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "behaviours(impulses:$name1){" + UpdatedBehaviourImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of codes with the given specifications
     */
    fun codes(impulses : Array<out UpdateCodeImpulse>?, config: UpdatedCodeImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "codes(impulses:$name1){" + UpdatedCodeImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of skills with the given specifications
     */
    fun skills(impulses : Array<out UpdateSkillImpulse>?, config: UpdatedSkillImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "skills(impulses:$name1){" + UpdatedSkillImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of skill provisions with the given specifications
     */
    fun skillProvisions(impulses : Array<out UpdateSkillProvisionImpulse>?, config: UpdatedSkillProvisionImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "skillProvisions(impulses:$name1){" + UpdatedSkillProvisionImpulse().apply(config).render(it) + "}"
    }
}

