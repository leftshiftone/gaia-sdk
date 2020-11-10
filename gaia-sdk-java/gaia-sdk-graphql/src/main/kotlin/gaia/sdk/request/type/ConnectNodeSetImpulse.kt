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
 * Impulse which indicates the result setting a node connection
 */
class ConnectNodeSetImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * edges removed before setting the new edge
     */
    fun removedEdges(config: EdgeKeyOne.() -> Unit) = 
        add { "removedEdges{ " + EdgeKeyOne().apply(config).render(it) + "}"}


    /**
     * edge created by this request
     */
    fun newEdge(config: Edge.() -> Unit) = 
        add { "newEdge{ " + Edge().apply(config).render(it) + "}"}

}

