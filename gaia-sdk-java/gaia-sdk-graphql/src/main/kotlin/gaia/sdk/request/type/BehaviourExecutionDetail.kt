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
 * Represents a detailed summary of executed prompts to a given processInstanceId
 */
class BehaviourExecutionDetail: Type() {

    fun processInstanceId() { 
        add {"processInstanceId" } 
    }

    fun identityId() { 
        add {"identityId" } 
    }

    fun qualifier() { 
        add {"qualifier" } 
    }

    fun behaviour() { 
        add {"behaviour" } 
    }

    fun behaviourId() { 
        add {"behaviourId" } 
    }

    fun nodes(config: BehaviourNodeExecution.() -> Unit) = 
        add { "nodes{ " + BehaviourNodeExecution().apply(config).render(it) + "}"}

}

