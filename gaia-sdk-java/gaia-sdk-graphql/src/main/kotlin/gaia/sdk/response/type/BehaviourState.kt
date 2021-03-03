package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class BehaviourState @JsonCreator constructor(
    @JsonProperty("behaviourId") val behaviourId:String? = null, 
    @JsonProperty("behaviourName") val behaviourName:String? = null, 
    @JsonProperty("numberOfExecutions") val numberOfExecutions:Int? = null, 
    @JsonProperty("running") val running:Float? = null, 
    @JsonProperty("success") val success:Float? = null, 
    @JsonProperty("waiting") val waiting:Float? = null, 
    @JsonProperty("failed") val failed:Float? = null
)