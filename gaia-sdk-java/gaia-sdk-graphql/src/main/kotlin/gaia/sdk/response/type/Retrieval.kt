package gaia.sdk.response.type

import gaia.sdk.api.scalar.*
import gaia.sdk.api.transmitter.*
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class Retrieval @JsonCreator constructor(
    /**
    * Container element which collects all information static data
    */
    @JsonProperty("knowledge") val knowledge:Knowledge?, 
    /**
    * Container element which collects all information about runtime data
    */
    @JsonProperty("experience") val experience:Experience?
)