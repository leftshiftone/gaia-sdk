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
 * Represents identity information
 */
class Identity: Type() {

    /**
     * The identity id
     */
    fun identityId() { 
        add {"identityId" } 
    }

    /**
     * The tenant id
     */
    fun tenantId() { 
        add {"tenantId" } 
    }

    /**
     * The name of the identity
     */
    fun qualifier() { 
        add {"qualifier" } 
    }

    /**
     * The available languages of the identity
     */
    fun availableLanguages() { 
        add {"availableLanguages" } 
    }

    /**
     * The order of languages that will be used in case of missing translations
     */
    fun languageOrder() { 
        add {"languageOrder" } 
    }
}

