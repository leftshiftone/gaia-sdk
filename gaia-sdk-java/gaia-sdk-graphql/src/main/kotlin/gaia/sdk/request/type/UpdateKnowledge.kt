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

class UpdateKnowledge: Type() {

    /**
     * updates a list of intents with the given specifications
     */
    fun intents(impulse : Array<out UpdateIntentImpulse>, config: UpdatedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "intents(impulse:$$name1){" + UpdatedIntentImpulse().apply(config).render(it) + "}"
    }
}

