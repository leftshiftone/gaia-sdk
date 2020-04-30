package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* The top level query type
*/
data class Query @JsonCreator constructor(
    /**
    * Container element for all introspect sensor fields
    */
    @JsonProperty("introspect") val introspect:Introspection?, 
    /**
    * Container element for all retrieve sensor fields
    */
    @JsonProperty("retrieve") val retrieve:Retrieval?
)