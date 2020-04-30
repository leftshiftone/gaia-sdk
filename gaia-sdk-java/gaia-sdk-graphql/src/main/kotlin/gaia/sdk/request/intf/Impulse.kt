package gaia.sdk.request.intf

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * Each message returned from GAIA implements this interface
 */
class Impulse: Type() {

    /**
     * The id of the impulse
     */
    fun id() { 
        add {"id" } 
    }
}

