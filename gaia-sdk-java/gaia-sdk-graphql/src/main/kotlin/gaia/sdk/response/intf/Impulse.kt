package gaia.sdk.response.intf

import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Each message returned from GAIA implements this interface
*/
data class Impulse @JsonCreator constructor(
    /**
    * The id of the impulse
    */
    @JsonProperty("id") val id:Uuid?
)