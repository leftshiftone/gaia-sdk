package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class Failure: Type() {

    fun reason() { 
        add {"reason" } 
    }

    fun failureType() { 
        add {"failureType" } 
    }

    fun exitCode() { 
        add {"exitCode" } 
    }

    fun affectedContainer() { 
        add {"affectedContainer" } 
    }

    fun logs() { 
        add {"logs" } 
    }
}

