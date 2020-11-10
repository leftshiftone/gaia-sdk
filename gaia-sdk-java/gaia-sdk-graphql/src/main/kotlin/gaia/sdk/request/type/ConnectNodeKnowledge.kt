package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class ConnectNodeKnowledge: Type() {

    fun append(type : EdgeType, target : Uuid, properties : Struct?, weight : Double?, config: ConnectNodeAppendedImpulse.() -> Unit) = add {
        val name1 = it.register("type", type)
        val name2 = it.register("target", target)
        val name3 = it.register("properties", properties)
        val name4 = it.register("weight", weight)
        "append(type:$name1, target:$name2, properties:$name3, weight:$name4){" + ConnectNodeAppendedImpulse().apply(config).render(it) + "}"
    }

    fun remove(type : EdgeType, target : Uuid, config: ConnectNodeRemovedImpulse.() -> Unit) = add {
        val name1 = it.register("type", type)
        val name2 = it.register("target", target)
        "remove(type:$name1, target:$name2){" + ConnectNodeRemovedImpulse().apply(config).render(it) + "}"
    }

    fun set(type : EdgeType, target : Uuid, properties : Struct?, weight : Double?, config: ConnectNodeSetImpulse.() -> Unit) = add {
        val name1 = it.register("type", type)
        val name2 = it.register("target", target)
        val name3 = it.register("properties", properties)
        val name4 = it.register("weight", weight)
        "set(type:$name1, target:$name2, properties:$name3, weight:$name4){" + ConnectNodeSetImpulse().apply(config).render(it) + "}"
    }

    fun unset(type : EdgeType, config: ConnectNodeUnsetImpulse.() -> Unit) = add {
        val name1 = it.register("type", type)
        "unset(type:$name1){" + ConnectNodeUnsetImpulse().apply(config).render(it) + "}"
    }
}

