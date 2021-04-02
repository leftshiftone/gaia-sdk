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
 * Represents SkillProvision information
 */
class SkillProvision: Type() {

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
     * The name of the skill provision
     */
    fun qualifier() { 
        add {"qualifier" } 
    }

    /**
     * Detailed description about the skill provision
     */
    fun appendent() { 
        add {"appendent" } 
    }

    /**
     * The list of labels of the skill provision
     */
    fun labelList() { 
        add {"labelList" } 
    }

    /**
     * The version used by this skill provision
     */
    fun version() { 
        add {"version" } 
    }

    /**
     * The reference to skill
     */
    fun skillRef() { 
        add {"skillRef" } 
    }

    /**
     * CPU
     */
    fun cpu() { 
        add {"cpu" } 
    }

    /**
     * Memory
     */
    fun memory() { 
        add {"memory" } 
    }

    /**
     * Amount of replicas
     */
    fun replicas() { 
        add {"replicas" } 
    }

    /**
     * Whether the skill provision should be enabled or not
     */
    fun enabled() { 
        add {"enabled" } 
    }

    /**
     * Amount of seconds that the skill requires to be ready
     */
    fun bootstrapTimeout() { 
        add {"bootstrapTimeout" } 
    }

    /**
     * Value-Key pairs with information needed for the skill provision
     */
    fun environment() { 
        add {"environment" } 
    }

    /**
     * The current status of the skill provision
     */
    fun status(config: SkillStatus.() -> Unit) = 
        add { "status{ " + SkillStatus().apply(config).render(it) + "}"}


    /**
     * The contract associated with this provision
     */
    fun contract() { 
        add {"contract" } 
    }
}

