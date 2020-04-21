package gaia.sdk.response.type

import gaia.sdk.api.scalar.*
import gaia.sdk.api.transmitter.*
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class StreamingImpulse @JsonCreator constructor(
    @JsonProperty("id") val id:Uuid?, 
    @JsonProperty("preSignedUrl") val preSignedUrl:String?
)