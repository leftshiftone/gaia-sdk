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
 * Represents Role information
 */
class Role: Type() {

    /**
     * Id of the role
     */
    fun roleId() { 
        add {"roleId" } 
    }

    /**
     * The name of the role
     */
    fun name() { 
        add {"name" } 
    }

    /**
     * The permissions of the role
     */
    fun permissions() { 
        add {"permissions" } 
    }
}

