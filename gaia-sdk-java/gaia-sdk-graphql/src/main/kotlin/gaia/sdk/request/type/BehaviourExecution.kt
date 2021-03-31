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
 * Represents behaviour execution information
 */
class BehaviourExecution: Type() {

    fun processInstanceId() { 
        add {"processInstanceId" } 
    }

    fun identityId() { 
        add {"identityId" } 
    }

    fun state() { 
        add {"state" } 
    }

    fun name() { 
        add {"name" } 
    }

    fun duration() { 
        add {"duration" } 
    }

    fun behaviourId() { 
        add {"behaviourId" } 
    }

    fun created() { 
        add {"created" } 
    }

    fun updated() { 
        add {"updated" } 
    }
}

