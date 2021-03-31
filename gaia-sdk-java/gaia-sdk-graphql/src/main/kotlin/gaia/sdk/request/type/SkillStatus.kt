package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class SkillStatus: Type() {

    fun health() { 
        add {"health" } 
    }

    fun running() { 
        add {"running" } 
    }

    fun pending() { 
        add {"pending" } 
    }

    fun failures(config: Failure.() -> Unit) = 
        add { "failures{ " + Failure().apply(config).render(it) + "}"}

}

