package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents behaviour node execution information
*/
data class BehaviourNodeExecution @JsonCreator constructor(
    @JsonProperty("activityId") val activityId:String? = null, 
    @JsonProperty("behaviourQualifier") val behaviourQualifier:String? = null, 
    @JsonProperty("behaviourId") val behaviourId:String? = null, 
    @JsonProperty("reference") val reference:Uuid? = null, 
    @JsonProperty("qualifier") val qualifier:String? = null, 
    @JsonProperty("state") val state:String? = null, 
    @JsonProperty("type") val type:String? = null, 
    @JsonProperty("created") val created:ISO8601? = null
)