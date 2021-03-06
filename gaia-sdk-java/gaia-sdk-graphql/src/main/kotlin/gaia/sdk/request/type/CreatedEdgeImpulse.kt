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
 * Impulse which indicates the result of a create edge impulse
 */
class CreatedEdgeImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * the edge instance
     */
    fun data(config: Edge.() -> Unit) = 
        add { "data{ " + Edge().apply(config).render(it) + "}"}

}

