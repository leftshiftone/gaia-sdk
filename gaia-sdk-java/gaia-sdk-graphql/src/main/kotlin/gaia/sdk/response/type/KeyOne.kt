package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* This entity represents the output of a delete impulse
*/
data class KeyOne @JsonCreator constructor(
    @JsonProperty("identityId") val identityId:Uuid? = null, 
    @JsonProperty("reference") val reference:Uuid? = null
)