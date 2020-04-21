package gaia.sdk.request.intf

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
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

