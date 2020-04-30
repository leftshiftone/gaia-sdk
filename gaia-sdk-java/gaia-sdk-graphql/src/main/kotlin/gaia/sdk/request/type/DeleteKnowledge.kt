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
     * deletes a list of intents with the given specifications
     */
    fun intents(impulse : Array<out DeleteIntentImpulse>, config: DeletedIntentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "intents(impulse:$$name1){" + DeletedIntentImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of prompts with the given specifications
     */
    fun prompts(impulse : Array<out DeletePromptImpulse>, config: DeletedPromptImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "prompts(impulse:$$name1){" + DeletedPromptImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of statements with the given specifications
     */
    fun statements(impulse : Array<out DeleteStatementImpulse>, config: DeletedStatementImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "statements(impulse:$$name1){" + DeletedStatementImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of fulfilments with the given specifications
     */
    fun fulfilments(impulse : Array<out DeleteFulfilmentImpulse>, config: DeletedFulfilmentImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "fulfilments(impulse:$$name1){" + DeletedFulfilmentImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of behaviours with the given specifications
     */
    fun behaviours(impulse : Array<out DeleteBehaviourImpulse>, config: DeletedBehaviourImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "behaviours(impulse:$$name1){" + DeletedBehaviourImpulse().apply(config).render(it) + "}"
    }

    /**
     * deletes a list of codes with the given specifications
     */
    fun codes(impulse : Array<out DeleteCodeImpulse>, config: DeletedCodeImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "codes(impulse:$$name1){" + DeletedCodeImpulse().apply(config).render(it) + "}"
    }
}

