package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents api key information
*/
data class ApiKey @JsonCreator constructor(
    /**
    * The api key id
    */
    @JsonProperty("apiKeyId") val apiKeyId:Uuid? = null, 
    /**
    * The name of the api key
    */
    @JsonProperty("name") val name:String? = null, 
    /**
    * The description of the api key
    */
    @JsonProperty("description") val description:String?, 
    /**
    * The secret of the api key
    */
    @JsonProperty("secret") val secret:String? = null, 
    /**
    * The flag to enable the api key
    */
    @JsonProperty("enabled") val enabled:Boolean? = null
)