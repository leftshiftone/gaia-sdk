package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class BehaviourNodeExecution @JsonCreator constructor(
    @JsonProperty("processInstanceId") val processInstanceId:Uuid?, 
    @JsonProperty("nodeInstanceId") val nodeInstanceId:Uuid?, 
    @JsonProperty("state") val state:String?, 
    @JsonProperty("executionGroupId") val executionGroupId:Uuid?, 
    @JsonProperty("nodeId") val nodeId:Uuid?, 
    @JsonProperty("processId") val processId:Uuid?, 
    @JsonProperty("type") val type:String?, 
    @JsonProperty("transitions") val transitions:Struct?, 
    @JsonProperty("timestamp") val timestamp:Long?, 
    @JsonProperty("parentProcessId") val parentProcessId:Uuid?
)