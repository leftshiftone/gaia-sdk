package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents identity metrics information
*/
data class IdentityMetrics @JsonCreator constructor(
    @JsonProperty("identityId") val identityId:Uuid? = null, 
    @JsonProperty("entityCount") val entityCount:MetricsEntityCount? = null, 
    @JsonProperty("topExecutedBehaviours") val topExecutedBehaviours:List<TopExecutedBehaviour>? = null, 
    @JsonProperty("behaviourStates") val behaviourStates:List<BehaviourState>? = null, 
    @JsonProperty("intentDetectionRate") val intentDetectionRate:IntentDetectionRate? = null
)