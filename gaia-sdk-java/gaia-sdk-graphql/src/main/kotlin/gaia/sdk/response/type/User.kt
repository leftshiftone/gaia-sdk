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
    @JsonProperty("userId") val userId:Uuid?, 
    /**
    * The username of the user
    */
    @JsonProperty("username") val username:String?, 
    /**
    * The password of the user
    */
    @JsonProperty("password") val password:String?, 
    /**
    * Is the User using 2FA
    */
    @JsonProperty("using2FA") val using2FA:Boolean?, 
    /**
    * The tenants of the user
    */
    @JsonProperty("tenants") val tenants:List<String>?, 
    /**
    * The roles of the user
    */
    @JsonProperty("roles") val roles:List<String>?, 
    /**
    * The groups of the user
    */
    @JsonProperty("groups") val groups:List<String>?, 
    /**
    * The permissions of the user
    */
    @JsonProperty("permissions") val permissions:List<String>?, 
    /**
    * The last passwords of the user
    */
    @JsonProperty("lastPasswords") val lastPasswords:List<String>?
)