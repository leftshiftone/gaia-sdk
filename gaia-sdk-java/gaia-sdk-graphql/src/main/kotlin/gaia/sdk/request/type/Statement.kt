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
 * Represents statement information
 */
class Statement: Type() {

    /**
     * The statement id
     */
    fun identityId() { 
        add {"identityId" } 
    }

    /**
     * The statement reference id
     */
    fun reference() { 
        add {"reference" } 
    }

    /**
     * The name of the statement
     */
    fun qualifier() { 
        add {"qualifier" } 
    }

    /**
     * Detailed description about the statement
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
     * The list of labels of the statement
     */
    fun labelList() { 
        add {"labelList" } 
    }

    /**
     * The version of the statement
     */
    fun version() { 
        add {"version" } 
    }
}

