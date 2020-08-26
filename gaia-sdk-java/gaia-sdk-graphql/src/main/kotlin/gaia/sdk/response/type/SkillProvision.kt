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
    @JsonProperty("tenantId") val tenantId:Uuid?, 
    /**
    * Skill reference
    */
    @JsonProperty("reference") val reference:Uuid?, 
    /**
    * The name of the skill provision
    */
    @JsonProperty("qualifier") val qualifier:String?, 
    /**
    * Detailed description about the skill provision
    */
    @JsonProperty("appendent") val appendent:String?, 
    /**
    * The list of labels of the skill provision
    */
    @JsonProperty("labelList") val labelList:List<String>?, 
    /**
    * The version of the skill
    */
    @JsonProperty("version") val version:String?, 
    /**
    * The reference to skill
    */
    @JsonProperty("skillRef") val skillRef:String?, 
    /**
    * Initial CPU
    */
    @JsonProperty("initialCpu") val initialCpu:Int?, 
    /**
    * Maximal allowed CPU
    */
    @JsonProperty("maximalCpu") val maximalCpu:Int?, 
    /**
    * Initial Memory
    */
    @JsonProperty("initialMemory") val initialMemory:Int?, 
    /**
    * Maximal allowed Memory
    */
    @JsonProperty("maximalMemory") val maximalMemory:Int?, 
    /**
    * Amount of replicas
    */
    @JsonProperty("replicas") val replicas:Int?, 
    /**
    * Whether the skill provision should be enabled or not
    */
    @JsonProperty("enabled") val enabled:Boolean?, 
    /**
    * Amount of seconds that the skill requires to be ready
    */
    @JsonProperty("bootstrapTimeout") val bootstrapTimeout:Int?, 
    /**
    * Value-Key pairs with information needed for the skill provision
    */
    @JsonProperty("environment") val environment:Struct?
)