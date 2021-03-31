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
    @JsonProperty("identityId") val identityId:Uuid? = null, 
    @JsonProperty("state") val state:String? = null, 
    @JsonProperty("name") val name:String? = null, 
    @JsonProperty("duration") val duration:Int? = null, 
    @JsonProperty("behaviourId") val behaviourId:Uuid? = null, 
    @JsonProperty("created") val created:ISO8601? = null, 
    @JsonProperty("updated") val updated:ISO8601? = null
)