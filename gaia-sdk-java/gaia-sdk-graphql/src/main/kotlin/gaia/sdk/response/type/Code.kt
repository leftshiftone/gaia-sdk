package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents code information
*/
data class Code @JsonCreator constructor(
    /**
    * The code id
    */
    @JsonProperty("identityId") val identityId:Uuid? = null, 
    /**
    * The code reference id
    */
    @JsonProperty("reference") val reference:Uuid? = null, 
    /**
    * The name of the code
    */
    @JsonProperty("qualifier") val qualifier:String? = null, 
    /**
    * Detailed description about the code
    */
    @JsonProperty("appendent") val appendent:String? = null, 
    /**
    * The code dictionary. The key is a file name and the value is the code
    */
    @JsonProperty("code") val code:Struct? = null, 
    /**
    * The list of labels of the code
    */
    @JsonProperty("labelList") val labelList:List<String>? = null, 
    /**
    * The type of the code
    */
    @JsonProperty("type") val type:String? = null
)