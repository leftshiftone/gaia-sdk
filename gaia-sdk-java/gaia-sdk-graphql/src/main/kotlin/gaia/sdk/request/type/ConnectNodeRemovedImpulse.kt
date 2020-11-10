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
     * all edges that are set after this request
     */
    fun allEdges(config: Edge.() -> Unit) = 
        add { "allEdges{ " + Edge().apply(config).render(it) + "}"}


    /**
     * edge removed by this request
     */
    fun removedEdge(config: EdgeKeyOne.() -> Unit) = 
        add { "removedEdge{ " + EdgeKeyOne().apply(config).render(it) + "}"}

}

