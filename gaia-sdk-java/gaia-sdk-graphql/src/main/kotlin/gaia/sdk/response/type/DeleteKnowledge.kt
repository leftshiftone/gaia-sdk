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
    @JsonProperty("edges") val edges:List<DeletedEdgeImpulse>?
)