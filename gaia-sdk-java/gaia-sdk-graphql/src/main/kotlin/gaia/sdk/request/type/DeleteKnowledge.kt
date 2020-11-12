package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class DeleteKnowledge: Type() {

    /**
     * deletes a list of identities with the given specifications
     */
    fun identities(impulses : Array<out DeleteIdentityImpulse>?, config: DeletedIdentityImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "identities(impulses:$name1){" + DeletedIdentityImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of tenants with the given specifications
     */
    fun tenants(impulses : Array<out DeleteTenantImpulse>?, config: DeletedTenantImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "tenants(impulses:$name1){" + DeletedTenantImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of users with the given specifications
     */
    fun users(impulses : Array<out DeleteUserImpulse>?, config: DeletedUserImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "users(impulses:$name1){" + DeletedUserImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of api keys with the given specifications
     */
    fun apiKeys(impulses : Array<out DeleteApiKeyImpulse>?, config: DeletedApiKeyImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "apiKeys(impulses:$name1){" + DeletedApiKeyImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of roles with the given specifications
     */
    fun roles(impulses : Array<out DeleteRoleImpulse>?, config: DeletedRoleImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "roles(impulses:$name1){" + DeletedRoleImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of intents with the given specifications
     */
    fun intents(impulses : Array<out DeleteIntentImpulse>?, config: DeletedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "intents(impulses:$name1){" + DeletedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of prompts with the given specifications
     */
    fun prompts(impulses : Array<out DeletePromptImpulse>?, config: DeletedPromptImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "prompts(impulses:$name1){" + DeletedPromptImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of statements with the given specifications
     */
    fun statements(impulses : Array<out DeleteStatementImpulse>?, config: DeletedStatementImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "statements(impulses:$name1){" + DeletedStatementImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of fulfilments with the given specifications
     */
    fun fulfilments(impulses : Array<out DeleteFulfilmentImpulse>?, config: DeletedFulfilmentImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "fulfilments(impulses:$name1){" + DeletedFulfilmentImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of behaviours with the given specifications
     */
    fun behaviours(impulses : Array<out DeleteBehaviourImpulse>?, config: DeletedBehaviourImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "behaviours(impulses:$name1){" + DeletedBehaviourImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of codes with the given specifications
     */
    fun codes(impulses : Array<out DeleteCodeImpulse>?, config: DeletedCodeImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "codes(impulses:$name1){" + DeletedCodeImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of edges with the given specifications
     */
    fun edges(impulses : Array<out DeleteEdgeImpulse>?, config: DeletedEdgeImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "edges(impulses:$name1){" + DeletedEdgeImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of skills with the given specifications
     */
    fun skills(impulses : Array<out DeleteSkillImpulse>?, config: DeletedSkillImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "skills(impulses:$name1){" + DeletedSkillImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of skill provisions with the given specifications
     */
    fun skillProvisions(impulses : Array<out DeleteSkillProvisionImpulse>?, config: DeletedSkillProvisionImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "skillProvisions(impulses:$name1){" + DeletedSkillProvisionImpulse().apply(config).render(it) + "}"
    }
}

