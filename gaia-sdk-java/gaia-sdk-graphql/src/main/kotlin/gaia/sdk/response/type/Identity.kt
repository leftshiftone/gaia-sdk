package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents identity information
*/
data class Identity @JsonCreator constructor(
    /**
    * The identity id
    */
    @JsonProperty("identityId") val identityId:Uuid?, 
    /**
    * The name of the identity
    */
    @JsonProperty("qualifier") val qualifier:String?
)