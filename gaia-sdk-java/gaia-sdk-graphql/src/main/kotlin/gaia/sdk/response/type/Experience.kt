package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Container type for runtime information
*/
data class Experience @JsonCreator constructor(
    @JsonProperty("behaviourExecution") val behaviourExecution:BehaviourExecutionDetail? = null, 
    @JsonProperty("behaviourExecutions") val behaviourExecutions:List<BehaviourExecution>? = null, 
    @JsonProperty("identityMetrics") val identityMetrics:IdentityMetrics? = null, 
    @JsonProperty("behaviourMetrics") val behaviourMetrics:BehaviourMetrics? = null
)