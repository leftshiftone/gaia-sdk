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
 * Represents tenant information
 */
class Tenant: Type() {

    /**
     * The tenant id
     */
    fun tenantId() { 
        add {"tenantId" } 
    }

    /**
     * The name of the tenant
     */
    fun qualifier() { 
        add {"qualifier" } 
    }
}

