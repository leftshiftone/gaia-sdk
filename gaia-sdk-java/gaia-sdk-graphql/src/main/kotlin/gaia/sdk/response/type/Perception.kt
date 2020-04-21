package gaia.sdk.response.type

import gaia.sdk.api.scalar.*
import gaia.sdk.api.transmitter.*
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* This type contains all perception sensor impulses which are used to invoke
* events in gaia.
*/
data class Perception @JsonCreator constructor(
    /**
    * Contains all perception fields needed for a conversation.
    */
    @JsonProperty("conversational") val conversational:Conversational?, 
    /**
    * Data perception impulse used to invoke a data transformation behaviour
    */
    @JsonProperty("perceiveData") val perceiveData:PerceivedImpulse?, 
    /**
    * Action perception impulse used to invoke a data transformation behaviour
    */
    @JsonProperty("perceiveAction") val perceiveAction:PerceivedImpulse?, 
    /**
    * Stream perception impulse used to invoke a data transformation behaviour.
    *     This perception impulse do not invoke the data transmission but establishes
    *     a connection to the streaming api.
    */
    @JsonProperty("perceiveStream") val perceiveStream:StreamingImpulse?
)