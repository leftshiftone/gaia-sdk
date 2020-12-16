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

    fun behaviourExecution(identityId : Uuid?, processInstanceId : Uuid?, config: BehaviourExecutionDetail.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("processInstanceId", processInstanceId)
        "behaviourExecution(identityId:$name1, processInstanceId:$name2){" + BehaviourExecutionDetail().apply(config).render(it) + "}"
    }

    fun behaviourExecutions(identityId : Uuid?, limit : Int?, offset : Int?, config: BehaviourExecution.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        "behaviourExecutions(identityId:$name1, limit:$name2, offset:$name3){" + BehaviourExecution().apply(config).render(it) + "}"
    }

    fun behaviourNodeExecutions(config: BehaviourNodeExecution.() -> Unit) = 
        add { "behaviourNodeExecutions{ " + BehaviourNodeExecution().apply(config).render(it) + "}"}

}

