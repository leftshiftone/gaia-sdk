package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* A skill build job creates definitive versions for Skill
*/
data class SkillBuildJob @JsonCreator constructor(
    /**
    * The reference of this build job
    */
    @JsonProperty("reference") val reference:Uuid? = null, 
    /**
    * Id of the tenant
    */
    @JsonProperty("tenantId") val tenantId:Uuid? = null, 
    /**
    * the associated version tag
    */
    @JsonProperty("tag") val tag:String? = null, 
    /**
    * The name of the build job
    */
    @JsonProperty("name") val name:String? = null, 
    /**
    * The current status of the build job
    */
    @JsonProperty("status") val status:SkillStatus? = null
)