package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class Introspection @JsonCreator constructor(
    @JsonProperty("cpu") val cpu:String? = null, 
    @JsonProperty("gpu") val gpu:String? = null, 
    @JsonProperty("memory") val memory:String? = null, 
    @JsonProperty("state") val state:RuntimeState? = null, 
    @JsonProperty("started") val started:ISO8601? = null, 
    @JsonProperty("skills") val skills:List<SkillIntrospection>? = null
)