package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class SkillProvisionBuildJob @JsonCreator constructor(
    /**
    * Id of the tenant
    */
    @JsonProperty("tenantId") val tenantId:Uuid? = null, 
    /**
    * Reference to the skill provision for that build job
    */
    @JsonProperty("provisionRef") val provisionRef:String? = null, 
    /**
    * Reference to the skill
    */
    @JsonProperty("skillRef") val skillRef:String? = null, 
    /**
    * The name of the build job
    */
    @JsonProperty("name") val name:String? = null, 
    /**
    * The current status of the build job
    */
    @JsonProperty("status") val status:Struct? = null
)