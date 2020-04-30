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
     * creates a list of intents with the given specifications
     */
    fun intents(impulses : Array<out CreateIntentImpulse>, config: CreatedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulses", impulses)
        "intents(impulses:$$name1){" + CreatedIntentImpulse().apply(config).render(it) + "}"
    }
}

