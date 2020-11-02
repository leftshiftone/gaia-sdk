package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents SkillProvision information
*/
data class SkillProvision @JsonCreator constructor(
    /**
    * Id of the tenant
    */
    @JsonProperty("tenantId") val tenantId:Uuid? = null, 
    /**
    * Skill reference
    */
    @JsonProperty("reference") val reference:Uuid? = null, 
    /**
    * The name of the skill provision
    */
    @JsonProperty("qualifier") val qualifier:String? = null, 
    /**
    * Detailed description about the skill provision
    */
    @JsonProperty("appendent") val appendent:String? = null, 
    /**
    * The list of labels of the skill provision
    */
    @JsonProperty("labelList") val labelList:List<String>? = null, 
    /**
    * The version of the skill
    */
    @JsonProperty("version") val version:String? = null, 
    /**
    * The reference to skill
    */
    @JsonProperty("skillRef") val skillRef:String? = null, 
    /**
    * CPU
    */
    @JsonProperty("cpu") val cpu:Int? = null, 
    /**
    * Memory
    */
    @JsonProperty("memory") val memory:Int? = null, 
    /**
    * Amount of replicas
    */
    @JsonProperty("replicas") val replicas:Int? = null, 
    /**
    * Whether the skill provision should be enabled or not
    */
    @JsonProperty("enabled") val enabled:Boolean? = null, 
    /**
    * Amount of seconds that the skill requires to be ready
    */
    @JsonProperty("bootstrapTimeout") val bootstrapTimeout:Int? = null, 
    /**
    * Value-Key pairs with information needed for the skill provision
    */
    @JsonProperty("environment") val environment:Struct? = null
)