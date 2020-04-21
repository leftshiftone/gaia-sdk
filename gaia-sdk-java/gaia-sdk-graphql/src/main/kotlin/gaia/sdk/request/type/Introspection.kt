package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
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

