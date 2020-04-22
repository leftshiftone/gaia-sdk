package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* This type contains all preservation sensor impulses which are used to support
* read/write/delete memory functions in gaia.
*/
data class Preservation @JsonCreator constructor(
    /**
    * creates a list of intents with the given specifications
    */
    @JsonProperty("createIntents") val createIntents:List<CreatedIntentImpulse>?, 
    /**
    * updates a list of intents with the given specifications
    */
    @JsonProperty("updateIntents") val updateIntents:List<UpdatedIntentImpulse>?, 
    /**
    * deletes a list of intents with the given specifications
    */
    @JsonProperty("deleteIntents") val deleteIntents:List<DeletedIntentImpulse>?
)