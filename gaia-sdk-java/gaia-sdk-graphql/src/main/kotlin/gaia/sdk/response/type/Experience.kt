package gaia.sdk.response.type

import gaia.sdk.api.scalar.*
import gaia.sdk.api.transmitter.*
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Container type for runtime information
*/
data class Experience @JsonCreator constructor(
    @JsonProperty("behaviourExecutions") val behaviourExecutions:List<BehaviourExecution>?, 
    @JsonProperty("behaviourNodeExecutions") val behaviourNodeExecutions:List<BehaviourNodeExecution>?
)