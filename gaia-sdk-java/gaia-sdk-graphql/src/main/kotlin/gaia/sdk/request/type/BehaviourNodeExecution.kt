package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class BehaviourNodeExecution: Type() {

    fun processInstanceId() { 
        add {"processInstanceId" } 
    }

    fun nodeInstanceId() { 
        add {"nodeInstanceId" } 
    }

    fun state() { 
        add {"state" } 
    }

    fun executionGroupId() { 
        add {"executionGroupId" } 
    }

    fun nodeId() { 
        add {"nodeId" } 
    }

    fun processId() { 
        add {"processId" } 
    }

    fun type() { 
        add {"type" } 
    }

    fun transitions() { 
        add {"transitions" } 
    }

    fun timestamp() { 
        add {"timestamp" } 
    }

    fun parentProcessId() { 
        add {"parentProcessId" } 
    }
}

