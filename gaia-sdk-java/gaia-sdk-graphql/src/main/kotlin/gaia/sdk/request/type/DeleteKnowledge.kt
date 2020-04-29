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

class DeleteKnowledge: Type() {

    /**
     * deletes a list of intents with the given specifications
     */
    fun intents(impulse : Array<out DeleteIntentImpulse>, config: DeletedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "intents(impulse:$$name1){" + DeletedIntentImpulse().apply(config).render(it) + "}"
    }
}

