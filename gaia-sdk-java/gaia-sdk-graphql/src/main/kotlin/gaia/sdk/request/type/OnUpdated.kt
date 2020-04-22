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

class OnUpdated: Type() {

    fun id() { 
        add {"id" } 
    }

    fun identityId() { 
        add {"identityId" } 
    }

    fun reference() { 
        add {"reference" } 
    }

    fun type() { 
        add {"type" } 
    }
}

