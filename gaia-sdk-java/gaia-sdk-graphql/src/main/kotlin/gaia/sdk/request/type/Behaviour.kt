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
 * this type represents the behaviour information
 */
class Behaviour: Type() {

    /**
     * The behaviour id
     */
    fun identityId() { 
        add {"identityId" } 
    }

    /**
     * The behaviour reference id
     */
    fun reference() { 
        add {"reference" } 
    }

    /**
     * The name of the behaviour
     */
    fun qualifier() { 
        add {"qualifier" } 
    }

    /**
     * Detailed description about the behaviour
     */
    fun appendent() { 
        add {"appendent" } 
    }

    /**
     * The list of labels of the behaviour
     */
    fun labellist() { 
        add {"labellist" } 
    }

    /**
     * The behaviour xml
     */
    fun behaviour() { 
        add {"behaviour" } 
    }
}

