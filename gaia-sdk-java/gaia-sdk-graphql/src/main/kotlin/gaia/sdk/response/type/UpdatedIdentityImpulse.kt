package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Impulse which indicates the result of a update identity impulse
*/
data class UpdatedIdentityImpulse @JsonCreator constructor(
    @JsonProperty("id") val id:Uuid?, 
    /**
    * the identity instance
    */
    @JsonProperty("data") val data:Identity?
)