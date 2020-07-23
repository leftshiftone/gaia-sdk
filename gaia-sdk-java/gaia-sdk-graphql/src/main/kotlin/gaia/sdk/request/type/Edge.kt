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
 * Represents graph information
 */
class Edge: Type() {

    fun source() { 
        add {"source" } 
    }

    fun target() { 
        add {"target" } 
    }

    fun type() { 
        add {"type" } 
    }

    fun weight() { 
        add {"weight" } 
    }
}

