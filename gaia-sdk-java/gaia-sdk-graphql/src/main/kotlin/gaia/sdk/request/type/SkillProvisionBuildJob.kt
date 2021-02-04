package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class SkillProvisionBuildJob: Type() {

    /**
     * Id of the tenant
     */
    fun tenantId() { 
        add {"tenantId" } 
    }

    /**
     * Reference to the skill provision for that build job
     */
    fun provisionRef() { 
        add {"provisionRef" } 
    }

    /**
     * Reference to the skill
     */
    fun skillRef() { 
        add {"skillRef" } 
    }

    /**
     * The name of the build job
     */
    fun name() { 
        add {"name" } 
    }

    /**
     * The current status of the build job
     */
    fun status() { 
        add {"status" } 
    }
}

