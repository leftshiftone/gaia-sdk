package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class OnDeleted: Type() {

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
