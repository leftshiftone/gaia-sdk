package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * Container type for static information
 */
class KnowledgeEdge: Type() {

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

