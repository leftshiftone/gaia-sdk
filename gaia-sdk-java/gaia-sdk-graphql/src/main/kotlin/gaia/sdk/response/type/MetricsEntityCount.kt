package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class MetricsEntityCount @JsonCreator constructor(
    @JsonProperty("intents") val intents:Int? = null, 
    @JsonProperty("prompts") val prompts:Int? = null, 
    @JsonProperty("statements") val statements:Int? = null, 
    @JsonProperty("fulfilments") val fulfilments:Int? = null, 
    @JsonProperty("behaviours") val behaviours:Int? = null, 
    @JsonProperty("codes") val codes:Int? = null
)