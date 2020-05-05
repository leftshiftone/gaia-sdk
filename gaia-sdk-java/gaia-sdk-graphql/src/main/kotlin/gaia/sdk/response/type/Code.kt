package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* this type represents the code information
*/
data class Code @JsonCreator constructor(
    /**
    * The code id
    */
    @JsonProperty("identityId") val identityId:Uuid?, 
    /**
    * The code reference id
    */
    @JsonProperty("reference") val reference:Uuid?, 
    /**
    * The name of the code
    */
    @JsonProperty("qualifier") val qualifier:String?, 
    /**
    * Detailed description about the code
    */
    @JsonProperty("appendent") val appendent:String?, 
    /**
    * The code dictionary. The key is a file name and the value is the code
    */
    @JsonProperty("code") val code:Struct?, 
    /**
    * The list of labels of the code
    */
    @JsonProperty("labellist") val labellist:List<String>?, 
    /**
    * The type of the code
    */
    @JsonProperty("type") val type:String?
)