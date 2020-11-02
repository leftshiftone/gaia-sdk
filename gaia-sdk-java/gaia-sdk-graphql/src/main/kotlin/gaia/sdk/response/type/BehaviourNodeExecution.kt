package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents behaviour node execution information
*/
data class BehaviourNodeExecution @JsonCreator constructor(
    @JsonProperty("processInstanceId") val processInstanceId:Uuid? = null, 
    @JsonProperty("nodeInstanceId") val nodeInstanceId:Uuid? = null, 
    @JsonProperty("state") val state:String? = null, 
    @JsonProperty("executionGroupId") val executionGroupId:Uuid? = null, 
    @JsonProperty("nodeId") val nodeId:Uuid? = null, 
    @JsonProperty("processId") val processId:Uuid? = null, 
    @JsonProperty("type") val type:String? = null, 
    @JsonProperty("transitions") val transitions:Struct? = null, 
    @JsonProperty("timestamp") val timestamp:ISO8601? = null, 
    @JsonProperty("parentProcessId") val parentProcessId:Uuid? = null
)