package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* This entity represents the output of an edge delete impulse
*/
data class EdgeKeyOne @JsonCreator constructor(
    @JsonProperty("source") val source:Uuid?, 
    @JsonProperty("edgeId") val edgeId:Uuid?
)