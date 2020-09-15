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
 * Impulse which indicates the result of a create Tenant impulse
 */
class CreatedTenantImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * the Tenant instance
     */
    fun data(config: Tenant.() -> Unit) = 
        add { "data{ " + Tenant().apply(config).render(it) + "}"}

}

