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
 * Impulse which indicates the result of a delete user impulse
 */
class DeletedUserImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    fun data(config: UserKeyOne.() -> Unit) = 
        add { "data{ " + UserKeyOne().apply(config).render(it) + "}"}

}

