package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
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
    @JsonProperty("conversational") val conversational:Conversational? = null, 
    /**
    * Data perception impulse used to invoke a data transformation behaviour
    */
    @JsonProperty("perceiveData") val perceiveData:PerceivedImpulse? = null, 
    /**
    * Action perception impulse used to invoke a data transformation behaviour
    */
    @JsonProperty("perceiveAction") val perceiveAction:PerceivedImpulse? = null
)