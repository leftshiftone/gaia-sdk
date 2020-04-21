package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * This type contains all perception sensor impulses which are used to invoke
 * events in gaia.
 */
class Perception: Type() {

    /**
     * Contains all perception fields needed for a conversation.
     */
    fun conversational(config: Conversational.() -> Unit) = 
        add { "conversational{ " + Conversational().apply(config).render(it) + "}"}


    /**
     * Data perception impulse used to invoke a data transformation behaviour
     */
    fun perceiveData(impulse : PerceiveDataImpulse, config: PerceivedImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "perceiveData(impulse:$$name1){" + PerceivedImpulse().apply(config).render(it) + "}"
    }

    /**
     * Action perception impulse used to invoke a data transformation behaviour
     */
    fun perceiveAction(impulse : PerceiveActionImpulse, config: PerceivedImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "perceiveAction(impulse:$$name1){" + PerceivedImpulse().apply(config).render(it) + "}"
    }

    /**
     * Stream perception impulse used to invoke a data transformation behaviour.
     *     This perception impulse do not invoke the data transmission but establishes
     *     a connection to the streaming api.
     */
    fun perceiveStream(impulse : PerceiveStreamImpulse, config: StreamingImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "perceiveStream(impulse:$$name1){" + StreamingImpulse().apply(config).render(it) + "}"
    }
}

