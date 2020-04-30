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
    @JsonProperty("prompts") val prompts:List<Prompt>?, 
    @JsonProperty("fulfilments") val fulfilments:List<Fulfilment>?, 
    @JsonProperty("statements") val statements:List<Statement>?, 
    @JsonProperty("codes") val codes:List<Code>?, 
    @JsonProperty("behaviours") val behaviours:List<Behaviour>?, 
    @JsonProperty("edges") val edges:List<KnowledgeEdge>?
)