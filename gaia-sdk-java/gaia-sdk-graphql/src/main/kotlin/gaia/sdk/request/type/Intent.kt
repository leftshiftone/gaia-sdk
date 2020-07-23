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
 * Represents intent information
 */
class Intent: Type() {

    /**
     * The identity id
     */
    fun identityId() { 
        add {"identityId" } 
    }

    /**
     * The intent reference id
     */
    fun reference() { 
        add {"reference" } 
    }

    /**
     * The name of the intent
     */
    fun qualifier() { 
        add {"qualifier" } 
    }

    /**
     * Detailed description about the intent
     */
    fun appendent() { 
        add {"appendent" } 
    }

    /**
     * The utterance dictionary. The key is a language key and the value is a list of utterances
     */
    fun utterance() { 
        add {"utterance" } 
    }

    /**
     * The list of labels of the intent
     */
    fun labelList() { 
        add {"labelList" } 
    }

    /**
     * The version of the intent
     */
    fun version() { 
        add {"version" } 
    }
}

