package gaia.sdk.response.type

import gaia.sdk.api.scalar.*
import gaia.sdk.api.transmitter.*
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