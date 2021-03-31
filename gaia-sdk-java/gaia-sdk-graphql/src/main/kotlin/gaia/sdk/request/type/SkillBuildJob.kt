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
 * A skill build job creates definitive versions for Skill
 */
class SkillBuildJob: Type() {

    /**
     * The reference of this build job
     */
    fun reference() { 
        add {"reference" } 
    }

    /**
     * Id of the tenant
     */
    fun tenantId() { 
        add {"tenantId" } 
    }

    /**
     * reference to the skill being built
     */
    fun skillRef() { 
        add {"skillRef" } 
    }

    /**
     * the associated version tag
     */
    fun tag() { 
        add {"tag" } 
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
    fun status(config: SkillStatus.() -> Unit) = 
        add { "status{ " + SkillStatus().apply(config).render(it) + "}"}


    /**
     * created at
     */
    fun created() { 
        add {"created" } 
    }
}

