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
 * Impulse which indicates the resulf of a create statement impulse
 */
class CreatedStatementImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * the statement instance
     */
    fun statement(config: Statement.() -> Unit) = 
        add { "statement{ " + Statement().apply(config).render(it) + "}"}

}

