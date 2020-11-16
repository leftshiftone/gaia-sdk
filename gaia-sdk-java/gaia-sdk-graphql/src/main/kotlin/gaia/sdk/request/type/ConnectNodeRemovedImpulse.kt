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
 * Impulse which indicates the result removing a node connection
 */
class ConnectNodeRemovedImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * edges removed by this request
     */
    fun removedEdges(config: EdgeKeyOne.() -> Unit) = 
        add { "removedEdges{ " + EdgeKeyOne().apply(config).render(it) + "}"}

}

