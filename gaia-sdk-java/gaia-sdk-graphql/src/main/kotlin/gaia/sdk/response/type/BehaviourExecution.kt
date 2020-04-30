package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class BehaviourExecution @JsonCreator constructor(
    @JsonProperty("processInstanceId") val processInstanceId:Uuid?, 
    @JsonProperty("state") val state:String?, 
    @JsonProperty("timestamp") val timestamp:ISO8601?, 
    @JsonProperty("duration") val duration:ISO8601?, 
    @JsonProperty("startEventType") val startEventType:String?, 
    @JsonProperty("startEventId") val startEventId:Uuid?, 
    @JsonProperty("initAttributes") val initAttributes:Struct?, 
    @JsonProperty("processId") val processId:Uuid?, 
    @JsonProperty("parentProcessId") val parentProcessId:Uuid?
)