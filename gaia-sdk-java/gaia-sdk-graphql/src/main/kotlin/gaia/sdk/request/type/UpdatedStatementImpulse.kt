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
 * Impulse which indicates the resulf of a update statement impulse
 */
class UpdatedStatementImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * the statement instance
     */
    fun data(config: Statement.() -> Unit) = 
        add { "data{ " + Statement().apply(config).render(it) + "}"}

}

