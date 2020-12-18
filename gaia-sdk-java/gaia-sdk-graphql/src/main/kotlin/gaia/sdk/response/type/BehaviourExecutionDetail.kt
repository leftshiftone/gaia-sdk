package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents a detailed summary of executed entities to a given processInstanceId
*/
data class BehaviourExecutionDetail @JsonCreator constructor(
    @JsonProperty("processInstanceId") val processInstanceId:Uuid? = null, 
    @JsonProperty("identityId") val identityId:Uuid? = null, 
    @JsonProperty("qualifier") val qualifier:String? = null, 
    @JsonProperty("behaviour") val behaviour:String? = null, 
    @JsonProperty("behaviourId") val behaviourId:Uuid? = null, 
    @JsonProperty("nodes") val nodes:List<BehaviourNodeExecution>? = null
)