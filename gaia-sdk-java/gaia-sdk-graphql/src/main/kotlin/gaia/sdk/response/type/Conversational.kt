package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Type which contains all impulses needed for the maintainence of a conversation
*/
data class Conversational @JsonCreator constructor(
    /**
    * Utterance perception impulse used to send an utterance text to gaia
    */
    @JsonProperty("perceiveUtterance") val perceiveUtterance:PerceivedImpulse? = null, 
    /**
    * Button perception impulse used to send a button action to gaia
    */
    @JsonProperty("perceiveButton") val perceiveButton:PerceivedImpulse? = null, 
    /**
    * Submit perception impulse used to send a submit action to gaia
    */
    @JsonProperty("perceiveSubmit") val perceiveSubmit:PerceivedImpulse? = null, 
    /**
    * Reception perception impulse used to send a reception to gaia
    */
    @JsonProperty("perceiveReception") val perceiveReception:PerceivedImpulse? = null, 
    /**
    * Suggestion perception impulse used to send a suggestion action to gaia
    */
    @JsonProperty("perceiveSuggestion") val perceiveSuggestion:PerceivedImpulse? = null
)