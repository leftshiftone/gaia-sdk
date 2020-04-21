package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class StreamingImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    fun preSignedUrl() { 
        add {"preSignedUrl" } 
    }
}

