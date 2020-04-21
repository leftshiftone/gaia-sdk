package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * The top level mutation type
 */
class Mutation: Type() {

    /**
     * Sensor impulses for all perception based functions.
     *     Perceptions are used to invoke events within gaia.
     */
    fun perceive(config: Perception.() -> Unit) = 
        add { "perceive{ " + Perception().apply(config).render(it) + "}"}


    /**
     * Sensor impulses for all practice based functions.
     *     Practices are used to transfer skills to gaia and to train them.
     */
    fun practice(config: Practice.() -> Unit) = 
        add { "practice{ " + Practice().apply(config).render(it) + "}"}


    /**
     * Sensor impulses for all preservation based functions.
     *     Preservations are used to invoke create/update/delete functions.
     */
    fun preserve(config: Preservation.() -> Unit) = 
        add { "preserve{ " + Preservation().apply(config).render(it) + "}"}


    /**
     * Container element for all evaluate sensor fields.
     *     Evaluations are used to invoke skills and to return the result.
     */
    fun evaluate(config: Evaluation.() -> Unit) = 
        add { "evaluate{ " + Evaluation().apply(config).render(it) + "}"}


    /**
     * Container element for all evaluate sensor fields.
     *     The activation can be used to unseal the vault or to grant access to an user.
     */
    fun activate(config: Activation.() -> Unit) = 
        add { "activate{ " + Activation().apply(config).render(it) + "}"}

}

