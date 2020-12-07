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
 * Container type for runtime information
 */
class Experience: Type() {

    fun behaviourExecution(processInstanceId : Uuid?, config: BehaviourExecution.() -> Unit) = add {
        val name1 = it.register("processInstanceId", processInstanceId)
        "behaviourExecution(processInstanceId:$name1){" + BehaviourExecution().apply(config).render(it) + "}"
    }

    fun behaviourExecutions(identityId : Uuid?, config: BehaviourExecution.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        "behaviourExecutions(identityId:$name1){" + BehaviourExecution().apply(config).render(it) + "}"
    }

    fun behaviourNodeExecutions(config: BehaviourNodeExecution.() -> Unit) = 
        add { "behaviourNodeExecutions{ " + BehaviourNodeExecution().apply(config).render(it) + "}"}

}

