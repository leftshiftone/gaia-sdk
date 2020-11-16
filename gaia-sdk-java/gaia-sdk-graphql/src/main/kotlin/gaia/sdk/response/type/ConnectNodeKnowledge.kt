package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class ConnectNodeKnowledge @JsonCreator constructor(
    @JsonProperty("append") val append:ConnectNodeAppendedImpulse? = null, 
    @JsonProperty("remove") val remove:ConnectNodeRemovedImpulse? = null, 
    @JsonProperty("set") val set:ConnectNodeSetImpulse? = null, 
    @JsonProperty("unset") val unset:ConnectNodeUnsetImpulse? = null
)