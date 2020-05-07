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
 * Impulse which indicates the resulf of a delete statement impulse
 */
class DeletedStatementImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * the statement instance
     */
    fun data(config: Intent.() -> Unit) = 
        add { "data{ " + Intent().apply(config).render(it) + "}"}

}

