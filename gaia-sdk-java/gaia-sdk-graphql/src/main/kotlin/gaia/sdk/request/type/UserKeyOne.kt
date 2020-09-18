package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class UserKeyOne: Type() {

    fun userId() { 
        add {"userId" } 
    }

    fun reference() { 
        add {"reference" } 
    }
}

