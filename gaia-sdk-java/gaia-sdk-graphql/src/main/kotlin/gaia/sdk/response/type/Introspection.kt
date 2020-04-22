package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class Introspection @JsonCreator constructor(
    @JsonProperty("cpu") val cpu:String?, 
    @JsonProperty("gpu") val gpu:String?, 
    @JsonProperty("memory") val memory:String?, 
    @JsonProperty("state") val state:RuntimeState?, 
    @JsonProperty("started") val started:Timestamp?, 
    @JsonProperty("skills") val skills:List<SkillIntrospection>?
)