package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* The top level mutation type
*/
data class Mutation @JsonCreator constructor(
    /**
    * Sensor impulses for all perception based functions.
    *     Perceptions are used to invoke events within gaia.
    */
    @JsonProperty("perceive") val perceive:Perception? = null, 
    /**
    * Sensor impulses for all practice based functions.
    *     Practices are used to transfer skills to gaia and to train them.
    */
    @JsonProperty("practice") val practice:Practice? = null, 
    /**
    * Sensor impulses for all preservation based functions.
    *     Preservations are used to invoke create/update/delete functions.
    */
    @JsonProperty("preserve") val preserve:Preservation? = null, 
    /**
    * Container element for all evaluate sensor fields.
    *     Evaluations are used to invoke skills and to return the result.
    */
    @JsonProperty("evaluate") val evaluate:Evaluation? = null, 
    /**
    * Container element for all evaluate sensor fields.
    *     The activation can be used to unseal the vault or to grant access to an user.
    */
    @JsonProperty("activate") val activate:Activation? = null
)