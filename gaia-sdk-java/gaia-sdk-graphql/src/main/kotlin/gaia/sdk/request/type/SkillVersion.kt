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
 * A skill version is a built version of a skill created by a SkillBuildJob
 */
class SkillVersion: Type() {

    fun skillRef() { 
        add {"skillRef" } 
    }

    fun version() { 
        add {"version" } 
    }

    fun created() { 
        add {"created" } 
    }
}

