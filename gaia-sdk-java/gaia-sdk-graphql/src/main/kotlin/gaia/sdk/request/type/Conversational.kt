package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * Type which contains all impulses needed for the maintainence of a conversation
 */
class Conversational: Type() {

    /**
     * Utterance perception impulse used to send an utterance text to gaia
     */
    fun perceiveUtterance(impulse : PerceiveUtteranceImpulse?, config: PerceivedImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "perceiveUtterance(impulse:$name1){" + PerceivedImpulse().apply(config).render(it) + "}"
    }

    /**
     * Button perception impulse used to send a button action to gaia
     */
    fun perceiveButton(impulse : PerceiveButtonImpulse?, config: PerceivedImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "perceiveButton(impulse:$name1){" + PerceivedImpulse().apply(config).render(it) + "}"
    }

    /**
     * Submit perception impulse used to send a submit action to gaia
     */
    fun perceiveSubmit(impulse : PerceiveSubmitImpulse?, config: PerceivedImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "perceiveSubmit(impulse:$name1){" + PerceivedImpulse().apply(config).render(it) + "}"
    }

    /**
     * Reception perception impulse used to send a reception to gaia
     */
    fun perceiveReception(impulse : PerceiveReceptionImpulse?, config: PerceivedImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "perceiveReception(impulse:$name1){" + PerceivedImpulse().apply(config).render(it) + "}"
    }

    /**
     * Suggestion perception impulse used to send a suggestion action to gaia
     */
    fun perceiveSuggestion(impulse : PerceiveSuggestionImpulse?, config: PerceivedImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "perceiveSuggestion(impulse:$name1){" + PerceivedImpulse().apply(config).render(it) + "}"
    }
}

