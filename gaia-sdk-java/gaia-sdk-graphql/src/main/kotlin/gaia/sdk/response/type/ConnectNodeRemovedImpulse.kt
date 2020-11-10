package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Impulse which indicates the result removing a node connection
*/
data class ConnectNodeRemovedImpulse @JsonCreator constructor(
    @JsonProperty("id") val id:Uuid? = null, 
    /**
    * all edges that are set after this request
    */
    @JsonProperty("allEdges") val allEdges:List<Edge>? = null, 
    /**
    * edge removed by this request
    */
    @JsonProperty("removedEdge") val removedEdge:EdgeKeyOne? = null
)