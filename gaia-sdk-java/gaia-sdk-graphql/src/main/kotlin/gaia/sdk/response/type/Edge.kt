package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents graph information
*/
data class Edge @JsonCreator constructor(
    @JsonProperty("source") val source:Uuid? = null, 
    @JsonProperty("target") val target:Uuid? = null, 
    @JsonProperty("edgeId") val edgeId:Uuid? = null, 
    @JsonProperty("type") val type:String? = null, 
    @JsonProperty("weight") val weight:Float? = null, 
    @JsonProperty("properties") val properties:Struct? = null
)