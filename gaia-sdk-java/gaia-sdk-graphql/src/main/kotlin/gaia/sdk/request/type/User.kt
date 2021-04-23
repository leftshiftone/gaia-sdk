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
 * Represents User information
 */
class User: Type() {

    /**
     * Id of the user
     */
    fun userId() { 
        add {"userId" } 
    }

    /**
     * The username of the user
     */
    fun username() { 
        add {"username" } 
    }

    /**
     * The email of the user
     */
    fun email() { 
        add {"email" } 
    }

    /**
     * The first name of the user
     */
    fun firstName() { 
        add {"firstName" } 
    }

    /**
     * The last name of the user
     */
    fun lastName() { 
        add {"lastName" } 
    }
}

