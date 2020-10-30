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
 * This entity represents the output of an edge delete impulse
 */
class EdgeKeyOne: Type() {

    fun source() { 
        add {"source" } 
    }

    fun edgeId() { 
        add {"edgeId" } 
    }
}

