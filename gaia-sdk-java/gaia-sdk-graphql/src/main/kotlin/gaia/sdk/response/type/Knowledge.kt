package gaia.sdk.response.type

import gaia.sdk.api.scalar.*
import gaia.sdk.api.transmitter.*
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class Knowledge @JsonCreator constructor(
    @JsonProperty("intents") val intents:List<Intent>?, 
    @JsonProperty("prompts") val prompts:List<Prompt>?, 
    @JsonProperty("fulfilments") val fulfilments:List<Fulfilment>?, 
    @JsonProperty("statements") val statements:List<Statement>?, 
    @JsonProperty("edge") val edge:List<KnowledgeEdge>?
)