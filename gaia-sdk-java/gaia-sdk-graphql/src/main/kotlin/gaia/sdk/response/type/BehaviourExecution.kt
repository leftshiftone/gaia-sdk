package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents behaviour execution information
*/
data class BehaviourExecution @JsonCreator constructor(
    @JsonProperty("processInstanceId") val processInstanceId:Uuid? = null, 
    @JsonProperty("state") val state:String? = null, 
    @JsonProperty("timestamp") val timestamp:ISO8601? = null, 
    @JsonProperty("duration") val duration:ISO8601? = null, 
    @JsonProperty("startEventType") val startEventType:String? = null, 
    @JsonProperty("startEventId") val startEventId:Uuid? = null, 
    @JsonProperty("initAttributes") val initAttributes:Struct? = null, 
    @JsonProperty("processId") val processId:Uuid? = null, 
    @JsonProperty("parentProcessId") val parentProcessId:Uuid? = null
)