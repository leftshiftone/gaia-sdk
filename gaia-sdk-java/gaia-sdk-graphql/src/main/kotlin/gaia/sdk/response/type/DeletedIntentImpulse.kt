package gaia.sdk.response.type

import gaia.sdk.api.scalar.*
import gaia.sdk.api.transmitter.*
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Impulse which indicates the resulf of a delete intent impulse
*/
data class DeletedIntentImpulse @JsonCreator constructor(
    @JsonProperty("id") val id:Uuid?, 
    /**
    * the intent instance
    */
    @JsonProperty("intent") val intent:Intent?
)