package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * Container type for runtime information
 */
class Experience: Type() {

    fun behaviourExecutions(config: BehaviourExecution.() -> Unit) = 
        add { "behaviourExecutions{ " + BehaviourExecution().apply(config).render(it) + "}"}


    fun behaviourNodeExecutions(config: BehaviourNodeExecution.() -> Unit) = 
        add { "behaviourNodeExecutions{ " + BehaviourNodeExecution().apply(config).render(it) + "}"}

}

