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
 * Represents Skill information
 */
class Skill: Type() {

    /**
     * Id of the tenant
     */
    fun tenantId() { 
        add {"tenantId" } 
    }

    /**
     * Skill reference
     */
    fun reference() { 
        add {"reference" } 
    }

    /**
     * The name of the skill
     */
    fun qualifier() { 
        add {"qualifier" } 
    }

    /**
     * Detailed description about the skill
     */
    fun appendent() { 
        add {"appendent" } 
    }

    /**
     * The list of labels of the skill
     */
    fun labelList() { 
        add {"labelList" } 
    }

    /**
     * The uri of the repository where the skill is
     */
    fun repositoryUri() { 
        add {"repositoryUri" } 
    }
}

