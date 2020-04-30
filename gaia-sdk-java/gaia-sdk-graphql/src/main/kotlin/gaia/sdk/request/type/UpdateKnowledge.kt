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
     * updates a list of intents with the given specifications
     */
    fun intents(impulse : Array<out UpdateIntentImpulse>, config: UpdatedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "intents(impulse:$$name1){" + UpdatedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of prompts with the given specifications
     */
    fun prompts(impulse : Array<out UpdatePromptImpulse>, config: UpdatedPromptImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "prompts(impulse:$$name1){" + UpdatedPromptImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of statements with the given specifications
     */
    fun statements(impulse : Array<out UpdateStatementImpulse>, config: UpdatedStatementImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "statements(impulse:$$name1){" + UpdatedStatementImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of fulfilments with the given specifications
     */
    fun fulfilments(impulse : Array<out UpdateFulfilmentImpulse>, config: UpdatedFulfilmentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "fulfilments(impulse:$$name1){" + UpdatedFulfilmentImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of behaviours with the given specifications
     */
    fun behaviours(impulse : Array<out UpdateBehaviourImpulse>, config: UpdatedBehaviourImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "behaviours(impulse:$$name1){" + UpdatedBehaviourImpulse().apply(config).render(it) + "}"
    }

    /**
     * updates a list of codes with the given specifications
     */
    fun codes(impulse : Array<out UpdateCodeImpulse>, config: UpdatedCodeImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "codes(impulse:$$name1){" + UpdatedCodeImpulse().apply(config).render(it) + "}"
    }
}

