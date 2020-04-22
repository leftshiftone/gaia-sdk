package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * This type contains all preservation sensor impulses which are used to support
 * read/write/delete memory functions in gaia.
 */
class Preservation: Type() {

    /**
     * creates a list of intents with the given specifications
     */
    fun createIntents(impulses : Array<out CreateIntentImpulse>, config: CreatedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "createIntents(impulses:$$name1){" + CreatedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of intents with the given specifications
     */
    fun updateIntents(impulses : Array<out UpdateIntentImpulse>, config: UpdatedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "updateIntents(impulses:$$name1){" + UpdatedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of intents with the given specifications
     */
    fun deleteIntents(impulses : Array<out DeleteIntentImpulse>, config: DeletedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "deleteIntents(impulses:$$name1){" + DeletedIntentImpulse().apply(config).render(it) + "}"
    }
}

