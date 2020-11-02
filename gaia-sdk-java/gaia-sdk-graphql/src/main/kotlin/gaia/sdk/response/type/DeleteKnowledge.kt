package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class DeleteKnowledge @JsonCreator constructor(
    /**
    * deletes a list of identities with the given specifications
    */
    @JsonProperty("identities") val identities:List<DeletedIdentityImpulse>? = null, 
    /**
    * deletes a list of tenants with the given specifications
    */
    @JsonProperty("tenants") val tenants:List<DeletedTenantImpulse>? = null, 
    /**
    * deletes a list of users with the given specifications
    */
    @JsonProperty("users") val users:List<DeletedUserImpulse>? = null, 
    /**
    * deletes a list of api keys with the given specifications
    */
    @JsonProperty("apiKeys") val apiKeys:List<DeletedApiKeyImpulse>? = null, 
    /**
    * deletes a list of intents with the given specifications
    */
    @JsonProperty("intents") val intents:List<DeletedIntentImpulse>? = null, 
    /**
    * deletes a list of prompts with the given specifications
    */
    @JsonProperty("prompts") val prompts:List<DeletedPromptImpulse>? = null, 
    /**
    * deletes a list of statements with the given specifications
    */
    @JsonProperty("statements") val statements:List<DeletedStatementImpulse>? = null, 
    /**
    * deletes a list of fulfilments with the given specifications
    */
    @JsonProperty("fulfilments") val fulfilments:List<DeletedFulfilmentImpulse>? = null, 
    /**
    * deletes a list of behaviours with the given specifications
    */
    @JsonProperty("behaviours") val behaviours:List<DeletedBehaviourImpulse>? = null, 
    /**
    * deletes a list of codes with the given specifications
    */
    @JsonProperty("codes") val codes:List<DeletedCodeImpulse>? = null, 
    /**
    * deletes a list of edges with the given specifications
    */
    @JsonProperty("edges") val edges:List<DeletedEdgeImpulse>? = null, 
    /**
    * deletes a list of skills with the given specifications
    */
    @JsonProperty("skills") val skills:List<DeletedSkillImpulse>? = null, 
    /**
    * deletes a list of skill provisions with the given specifications
    */
    @JsonProperty("skillProvisions") val skillProvisions:List<DeletedSkillProvisionImpulse>? = null
)