package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * this type represents the intent information
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
    fun labellist() { 
        add {"labellist" } 
    }

    /**
     * The version of the intent
     */
    fun version() { 
        add {"version" } 
    }
}

