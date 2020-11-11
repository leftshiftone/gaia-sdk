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

    fun append(impulse : ConnectAppendNodeImpulse?, config: ConnectNodeAppendedImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "append(impulse:$name1){" + ConnectNodeAppendedImpulse().apply(config).render(it) + "}"
    }

    fun remove(impulse : ConnectRemoveNodeImpulse?, config: ConnectNodeRemovedImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "remove(impulse:$name1){" + ConnectNodeRemovedImpulse().apply(config).render(it) + "}"
    }

    fun set(impulse : ConnectSetNodeImpulse?, config: ConnectNodeSetImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "set(impulse:$name1){" + ConnectNodeSetImpulse().apply(config).render(it) + "}"
    }

    fun unset(impulse : ConnectUnsetNodeImpulse?, config: ConnectNodeUnsetImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "unset(impulse:$name1){" + ConnectNodeUnsetImpulse().apply(config).render(it) + "}"
    }
}

