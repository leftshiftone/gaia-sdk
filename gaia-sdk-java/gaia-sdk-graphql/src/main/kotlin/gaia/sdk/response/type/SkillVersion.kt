package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* A skill version is a built version of a skill created by a SkillBuildJob
*/
data class SkillVersion @JsonCreator constructor(
    @JsonProperty("skillRef") val skillRef:String? = null, 
    @JsonProperty("version") val version:String? = null, 
    @JsonProperty("created") val created:ISO8601? = null
)