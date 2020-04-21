package gaia.sdk.response.type

import gaia.sdk.api.scalar.*
import gaia.sdk.api.transmitter.*
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* This impulse returns the result of a skill practice query request
*/
data class SkillPracticedImpulse @JsonCreator constructor(
    @JsonProperty("id") val id:Uuid?, 
    /**
    * The result of the skill practice
    */
    @JsonProperty("data") val data:Struct?
)