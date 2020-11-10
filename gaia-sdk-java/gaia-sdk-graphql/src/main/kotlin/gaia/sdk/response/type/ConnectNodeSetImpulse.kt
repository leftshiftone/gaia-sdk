package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Impulse which indicates the result setting a node connection
*/
data class ConnectNodeSetImpulse @JsonCreator constructor(
    @JsonProperty("id") val id:Uuid? = null, 
    /**
    * edges removed before setting the new edge
    */
    @JsonProperty("removedEdges") val removedEdges:List<EdgeKeyOne>? = null, 
    /**
    * edge created by this request
    */
    @JsonProperty("newEdge") val newEdge:Edge? = null
)