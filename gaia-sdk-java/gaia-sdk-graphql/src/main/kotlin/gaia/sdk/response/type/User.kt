package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents User information
*/
data class User @JsonCreator constructor(
    /**
    * Id of the user
    */
    @JsonProperty("userId") val userId:Uuid? = null, 
    /**
    * The username of the user
    */
    @JsonProperty("username") val username:String? = null, 
    /**
    * The email of the user
    */
    @JsonProperty("email") val email:String? = null, 
    /**
    * The first name of the user
    */
    @JsonProperty("firstName") val firstName:String? = null, 
    /**
    * The last name of the user
    */
    @JsonProperty("lastName") val lastName:String? = null
)