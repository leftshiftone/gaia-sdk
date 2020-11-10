package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class ConnectKnowledge: Type() {

    fun node(nodeId : Uuid, config: ConnectNodeKnowledge.() -> Unit) = add {
        val name1 = it.register("nodeId", nodeId)
        "node(nodeId:$name1){" + ConnectNodeKnowledge().apply(config).render(it) + "}"
    }
}

