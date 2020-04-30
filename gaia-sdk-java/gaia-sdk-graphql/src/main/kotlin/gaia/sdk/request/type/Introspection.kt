package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class Introspection: Type() {

    fun cpu() { 
        add {"cpu" } 
    }

    fun gpu() { 
        add {"gpu" } 
    }

    fun memory() { 
        add {"memory" } 
    }

    fun state() { 
        add {"state" } 
    }

    fun started() { 
        add {"started" } 
    }

    fun skills(config: SkillIntrospection.() -> Unit) = 
        add { "skills{ " + SkillIntrospection().apply(config).render(it) + "}"}

}

