package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class SkillIntrospection @JsonCreator constructor(
    @JsonProperty("name") val name:String?, 
    @JsonProperty("state") val state:SkillState?, 
    @JsonProperty("started") val started:Timestamp?
)