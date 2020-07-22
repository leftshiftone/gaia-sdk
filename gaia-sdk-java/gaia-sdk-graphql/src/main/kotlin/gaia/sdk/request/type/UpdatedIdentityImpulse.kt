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
 * Impulse which indicates the result of a update identity impulse
 */
class UpdatedIdentityImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * the identity instance
     */
    fun data(config: Identity.() -> Unit) = 
        add { "data{ " + Identity().apply(config).render(it) + "}"}

}

