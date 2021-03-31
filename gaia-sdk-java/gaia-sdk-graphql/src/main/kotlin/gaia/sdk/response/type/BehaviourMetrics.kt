package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class BehaviourMetrics @JsonCreator constructor(
    @JsonProperty("identityId") val identityId:Uuid? = null, 
    @JsonProperty("behaviourId") val behaviourId:Uuid? = null, 
    @JsonProperty("statesPerDay") val statesPerDay:List<BehaviourStatesPerDay>? = null
)