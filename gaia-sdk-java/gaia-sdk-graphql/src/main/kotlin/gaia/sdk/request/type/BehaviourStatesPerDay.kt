package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class BehaviourStatesPerDay: Type() {

    fun date() { 
        add {"date" } 
    }

    fun running() { 
        add {"running" } 
    }

    fun success() { 
        add {"success" } 
    }

    fun waiting() { 
        add {"waiting" } 
    }

    fun failed() { 
        add {"failed" } 
    }
}

