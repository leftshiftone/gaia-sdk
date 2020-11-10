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
 * Impulse which indicates the result appending a node connection
 */
class ConnectNodeAppendedImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * all edges that are set after this request
     */
    fun allEdges(config: Edge.() -> Unit) = 
        add { "allEdges{ " + Edge().apply(config).render(it) + "}"}


    /**
     * edge created by this request
     */
    fun newEdge(config: Edge.() -> Unit) = 
        add { "newEdge{ " + Edge().apply(config).render(it) + "}"}

}

