package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents Skill information
*/
data class Skill @JsonCreator constructor(
    /**
    * Id of the tenant
    */
    @JsonProperty("tenantId") val tenantId:Uuid?, 
    /**
    * Skill reference
    */
    @JsonProperty("reference") val reference:Uuid?, 
    /**
    * The name of the skill
    */
    @JsonProperty("qualifier") val qualifier:String?, 
    /**
    * Detailed description about the skill
    */
    @JsonProperty("appendent") val appendent:String?, 
    /**
    * The list of labels of the skill
    */
    @JsonProperty("labelList") val labelList:List<String>?, 
    /**
    * The uri of the repository where the skill is
    */
    @JsonProperty("repositoryUri") val repositoryUri:String?
)