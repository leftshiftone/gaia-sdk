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
 * this type represents the code information
 */
class Code: Type() {

    /**
     * The code id
     */
    fun identityId() { 
        add {"identityId" } 
    }

    /**
     * The code reference id
     */
    fun reference() { 
        add {"reference" } 
    }

    /**
     * The name of the code
     */
    fun qualifier() { 
        add {"qualifier" } 
    }

    /**
     * Detailed description about the code
     */
    fun appendent() { 
        add {"appendent" } 
    }

    /**
     * The code dictionary. The key is a file name and the value is the code
     */
    fun code() { 
        add {"code" } 
    }

    /**
     * The list of labels of the code
     */
    fun labellist() { 
        add {"labellist" } 
    }

    /**
     * The type of the code
     */
    fun type() { 
        add {"type" } 
    }
}

