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
 * Impulse which indicates the result of a create code impulse
 */
class CreatedCodeImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * the code instance
     */
    fun data(config: Code.() -> Unit) = 
        add { "data{ " + Code().apply(config).render(it) + "}"}

}

