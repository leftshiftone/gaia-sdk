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
 * Represents api key information
 */
class ApiKey: Type() {

    /**
     * The api key id
     */
    fun apiKeyId() { 
        add {"apiKeyId" } 
    }

    /**
     * The name of the api key
     */
    fun name() { 
        add {"name" } 
    }

    /**
     * The description of the api key
     */
    fun description() { 
        add {"description" } 
    }

    /**
     * The secret of the api key
     */
    fun secret() { 
        add {"secret" } 
    }

    /**
     * The flag to enable the api key
     */
    fun enabled() { 
        add {"enabled" } 
    }
}

