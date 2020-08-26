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
 * Impulse which indicates the result of a update Skill impulse
 */
class UpdatedSkillImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * the Skill instance
     */
    fun data(config: Skill.() -> Unit) = 
        add { "data{ " + Skill().apply(config).render(it) + "}"}

}

