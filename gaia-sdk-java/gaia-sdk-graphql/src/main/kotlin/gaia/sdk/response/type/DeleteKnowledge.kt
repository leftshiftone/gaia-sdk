package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class DeleteKnowledge @JsonCreator constructor(
    /**
    * deletes a list of intents with the given specifications
    */
    @JsonProperty("intents") val intents:List<DeletedIntentImpulse>?
)