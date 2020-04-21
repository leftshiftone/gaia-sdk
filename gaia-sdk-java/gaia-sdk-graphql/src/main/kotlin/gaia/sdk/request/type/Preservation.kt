package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * This type contains all preservation sensor impulses which are used to support
 * read/write/delete memory functions in gaia.
 */
class Preservation: Type() {

    /**
     * creates an intent with the given specification
     */
    fun createIntent(impulse : CreateIntentImpulse, config: CreatedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "createIntent(impulse:$$name1){" + CreatedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates an intent with the given specification
     */
    fun updateIntent(impulse : UpdateIntentImpulse, config: UpdatedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "updateIntent(impulse:$$name1){" + UpdatedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes an intent with the given specification
     */
    fun deleteIntent(impulse : DeleteIntentImpulse, config: DeletedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "deleteIntent(impulse:$$name1){" + DeletedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * creates a list of intents with the given specifications
     */
    fun createIntents(impulse : CreateIntentImpulse, config: CreatedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "createIntents(impulse:$$name1){" + CreatedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of intents with the given specifications
     */
    fun updateIntents(impulse : UpdateIntentImpulse, config: UpdatedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "updateIntents(impulse:$$name1){" + UpdatedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of intents with the given specifications
     */
    fun deleteIntents(impulse : DeleteIntentImpulse, config: DeletedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "deleteIntents(impulse:$$name1){" + DeletedIntentImpulse().apply(config).render(it) + "}"
    }
}

