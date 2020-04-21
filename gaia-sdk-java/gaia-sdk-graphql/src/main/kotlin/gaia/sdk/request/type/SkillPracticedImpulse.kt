package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * This impulse returns the result of a skill practice query request
 */
class SkillPracticedImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * The result of the skill practice
     */
    fun data() { 
        add {"data" } 
    }
}

