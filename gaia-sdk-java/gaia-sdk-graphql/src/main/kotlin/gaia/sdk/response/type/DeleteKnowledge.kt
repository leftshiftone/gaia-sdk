package gaia.sdk.response.type

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class DeleteKnowledge @JsonCreator constructor(
    /**
    * deletes a list of identities with the given specifications
    */
    @JsonProperty("identities") val identities:List<DeletedIdentityImpulse>?, 
    /**
    * deletes a list of intents with the given specifications
    */
    @JsonProperty("intents") val intents:List<DeletedIntentImpulse>?, 
    /**
    * deletes a list of prompts with the given specifications
    */
    @JsonProperty("prompts") val prompts:List<DeletedPromptImpulse>?, 
    /**
    * deletes a list of statements with the given specifications
    */
    @JsonProperty("statements") val statements:List<DeletedStatementImpulse>?, 
    /**
    * deletes a list of fulfilments with the given specifications
    */
    @JsonProperty("fulfilments") val fulfilments:List<DeletedFulfilmentImpulse>?, 
    /**
    * deletes a list of behaviours with the given specifications
    */
    @JsonProperty("behaviours") val behaviours:List<DeletedBehaviourImpulse>?, 
    /**
    * deletes a list of codes with the given specifications
    */
    @JsonProperty("codes") val codes:List<DeletedCodeImpulse>?, 
    /**
    * deletes a list of edges with the given specifications
    */
    @JsonProperty("edges") val edges:List<DeletedEdgeImpulse>?, 
    /**
    * deletes a list of skills with the given specifications
    */
    @JsonProperty("skills") val skills:List<DeletedSkillImpulse>?, 
    /**
    * deletes a list of skill provisions with the given specifications
    */
    @JsonProperty("skillProvisions") val skillProvisions:List<DeletedSkillProvisionImpulse>?
)