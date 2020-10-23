package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class CreateKnowledge @JsonCreator constructor(
    /**
    * creates a list of identities with the given specifications
    */
    @JsonProperty("identities") val identities:List<CreatedIdentityImpulse>? = null, 
    /**
    * creates a list of tenants with the given specifications
    */
    @JsonProperty("tenants") val tenants:List<CreatedTenantImpulse>? = null, 
    /**
    * creates a list of users with the given specifications
    */
    @JsonProperty("users") val users:List<CreatedUserImpulse>? = null, 
    /**
    * creates a list of api keys with the given specifications
    */
    @JsonProperty("apiKeys") val apiKeys:List<CreatedApiKeyImpulse>? = null, 
    /**
    * creates a list of intents with the given specifications
    */
    @JsonProperty("intents") val intents:List<CreatedIntentImpulse>? = null, 
    /**
    * creates a list of prompts with the given specifications
    */
    @JsonProperty("prompts") val prompts:List<CreatedPromptImpulse>? = null, 
    /**
    * creates a list of statements with the given specifications
    */
    @JsonProperty("statements") val statements:List<CreatedStatementImpulse>? = null, 
    /**
    * creates a list of fulfilments with the given specifications
    */
    @JsonProperty("fulfilments") val fulfilments:List<CreatedFulfilmentImpulse>? = null, 
    /**
    * creates a list of behaviours with the given specifications
    */
    @JsonProperty("behaviours") val behaviours:List<CreatedBehaviourImpulse>? = null, 
    /**
    * creates a list of codes with the given specifications
    */
    @JsonProperty("codes") val codes:List<CreatedCodeImpulse>? = null, 
    /**
    * creates a list of edges with the given specifications
    */
    @JsonProperty("edges") val edges:List<CreatedEdgeImpulse>? = null, 
    /**
    * creates a list of skills with the given specifications
    */
    @JsonProperty("skills") val skills:List<CreatedSkillImpulse>? = null, 
    /**
    * creates a list of skill provisions with the given specifications
    */
    @JsonProperty("skillProvisions") val skillProvisions:List<CreatedSkillProvisionImpulse>? = null
)