package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class SkillStatus @JsonCreator constructor(
    @JsonProperty("health") val health:String? = null, 
    @JsonProperty("running") val running:Int? = null, 
    @JsonProperty("pending") val pending:Int? = null, 
    @JsonProperty("failures") val failures:List<Failure>? = null
)