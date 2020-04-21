package gaia.sdk.response.type

import gaia.sdk.api.scalar.*
import gaia.sdk.api.transmitter.*
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class SkillIntrospection @JsonCreator constructor(
    @JsonProperty("name") val name:String?, 
    @JsonProperty("state") val state:SkillState?, 
    @JsonProperty("started") val started:Timestamp?
)