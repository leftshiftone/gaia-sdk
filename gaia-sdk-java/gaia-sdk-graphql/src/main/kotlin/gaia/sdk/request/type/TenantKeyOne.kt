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
 * This entity represents the output of a delete tenant impulse
 */
class TenantKeyOne: Type() {

    fun tenantId() { 
        add {"tenantId" } 
    }

    fun reference() { 
        add {"reference" } 
    }
}

