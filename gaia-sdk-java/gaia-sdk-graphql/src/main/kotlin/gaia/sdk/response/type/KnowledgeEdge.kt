package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Container type for static information
*/
data class KnowledgeEdge @JsonCreator constructor(
    @JsonProperty("source") val source:Struct?, 
    @JsonProperty("target") val target:Struct?, 
    @JsonProperty("type") val type:String?, 
    @JsonProperty("weight") val weight:Float?
)