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
 * Represents behaviour node execution information
 */
class BehaviourNodeExecution: Type() {

    fun activityId() { 
        add {"activityId" } 
    }

    fun reference() { 
        add {"reference" } 
    }

    fun qualifier() { 
        add {"qualifier" } 
    }

    fun state() { 
        add {"state" } 
    }

    fun type() { 
        add {"type" } 
    }

    fun transitions() { 
        add {"transitions" } 
    }

    fun created() { 
        add {"created" } 
    }
}

