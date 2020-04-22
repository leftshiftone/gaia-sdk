package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class BehaviourExecution: Type() {

    fun processInstanceId() { 
        add {"processInstanceId" } 
    }

    fun state() { 
        add {"state" } 
    }

    fun timestamp() { 
        add {"timestamp" } 
    }

    fun duration() { 
        add {"duration" } 
    }

    fun startEventType() { 
        add {"startEventType" } 
    }

    fun startEventId() { 
        add {"startEventId" } 
    }

    fun initAttributes() { 
        add {"initAttributes" } 
    }

    fun processId() { 
        add {"processId" } 
    }

    fun parentProcessId() { 
        add {"parentProcessId" } 
    }
}

