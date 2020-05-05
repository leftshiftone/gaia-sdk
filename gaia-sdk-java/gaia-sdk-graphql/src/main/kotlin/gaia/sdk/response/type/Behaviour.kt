package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* this type represents the behaviour information
*/
data class Behaviour @JsonCreator constructor(
    /**
    * The behaviour id
    */
    @JsonProperty("identityId") val identityId:Uuid?, 
    /**
    * The behaviour reference id
    */
    @JsonProperty("reference") val reference:Uuid?, 
    /**
    * The name of the behaviour
    */
    @JsonProperty("qualifier") val qualifier:String?, 
    /**
    * Detailed description about the behaviour
    */
    @JsonProperty("appendent") val appendent:String?, 
    /**
    * The list of labels of the behaviour
    */
    @JsonProperty("labellist") val labellist:List<String>?, 
    /**
    * The behaviour xml
    */
    @JsonProperty("behaviour") val behaviour:String?
)