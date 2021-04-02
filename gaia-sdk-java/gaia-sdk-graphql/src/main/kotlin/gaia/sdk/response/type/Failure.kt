package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class Failure @JsonCreator constructor(
    @JsonProperty("reason") val reason:String? = null, 
    @JsonProperty("failureType") val failureType:String? = null, 
    @JsonProperty("exitCode") val exitCode:Int? = null, 
    @JsonProperty("affectedContainer") val affectedContainer:String? = null, 
    @JsonProperty("logs") val logs:List<String>? = null
)