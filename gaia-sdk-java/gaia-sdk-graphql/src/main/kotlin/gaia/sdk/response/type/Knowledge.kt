package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class Knowledge @JsonCreator constructor(
    @JsonProperty("intents") val intents:List<Intent>?, 
    @JsonProperty("intent") val intent:Intent?, 
    @JsonProperty("prompts") val prompts:List<Prompt>?, 
    @JsonProperty("prompt") val prompt:Prompt?, 
    @JsonProperty("fulfilments") val fulfilments:List<Fulfilment>?, 
    @JsonProperty("fulfilment") val fulfilment:Fulfilment?, 
    @JsonProperty("statements") val statements:List<Statement>?, 
    @JsonProperty("statement") val statement:Statement?, 
    @JsonProperty("codes") val codes:List<Code>?, 
    @JsonProperty("code") val code:Code?, 
    @JsonProperty("behaviours") val behaviours:List<Behaviour>?, 
    @JsonProperty("behaviour") val behaviour:Behaviour?, 
    @JsonProperty("edges") val edges:List<KnowledgeEdge>?
)