package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class UpdateKnowledge @JsonCreator constructor(
    /**
    * updates a list of identities with the given specifications
    */
    @JsonProperty("identities") val identities:List<UpdatedIdentityImpulse>? = null, 
    /**
    * updates a list of tenants with the given specifications
    */
    @JsonProperty("tenants") val tenants:List<UpdatedTenantImpulse>? = null, 
    /**
    * updates a list of users with the given specifications
    */
    @JsonProperty("users") val users:List<UpdatedUserImpulse>? = null, 
    /**
    * updates a list of api keys with the given specifications
    */
    @JsonProperty("apiKeys") val apiKeys:List<UpdatedApiKeyImpulse>? = null, 
    /**
    * updates a list of roles with the given specifications
    */
    @JsonProperty("roles") val roles:List<UpdatedRoleImpulse>?, 
    /**
    * updates a list of intents with the given specifications
    */
    @JsonProperty("intents") val intents:List<UpdatedIntentImpulse>? = null, 
    /**
    * updates a list of prompts with the given specifications
    */
    @JsonProperty("prompts") val prompts:List<UpdatedPromptImpulse>? = null, 
    /**
    * updates a list of statements with the given specifications
    */
    @JsonProperty("statements") val statements:List<UpdatedStatementImpulse>? = null, 
    /**
    * updates a list of fulfilments with the given specifications
    */
    @JsonProperty("fulfilments") val fulfilments:List<UpdatedFulfilmentImpulse>? = null, 
    /**
    * updates a list of behaviours with the given specifications
    */
    @JsonProperty("behaviours") val behaviours:List<UpdatedBehaviourImpulse>? = null, 
    /**
    * updates a list of codes with the given specifications
    */
    @JsonProperty("codes") val codes:List<UpdatedCodeImpulse>? = null, 
    /**
    * updates a list of skills with the given specifications
    */
    @JsonProperty("skills") val skills:List<UpdatedSkillImpulse>? = null, 
    /**
    * updates a list of skill provisions with the given specifications
    */
    @JsonProperty("skillProvisions") val skillProvisions:List<UpdatedSkillProvisionImpulse>? = null
)