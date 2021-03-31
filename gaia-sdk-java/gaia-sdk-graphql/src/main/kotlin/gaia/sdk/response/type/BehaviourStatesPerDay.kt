package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class BehaviourStatesPerDay @JsonCreator constructor(
    @JsonProperty("date") val date:ISO8601? = null, 
    @JsonProperty("running") val running:Int? = null, 
    @JsonProperty("success") val success:Int? = null, 
    @JsonProperty("waiting") val waiting:Int? = null, 
    @JsonProperty("failed") val failed:Int? = null
)