package gaia.sdk.response.type

import gaia.sdk.api.scalar.*
import gaia.sdk.api.transmitter.*
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* this type represents the statement information
*/
data class Statement @JsonCreator constructor(
    /**
    * The statement id
    */
    @JsonProperty("identityId") val identityId:Uuid?, 
    /**
    * The statement reference id
    */
    @JsonProperty("reference") val reference:Uuid?, 
    /**
    * The name of the statement
    */
    @JsonProperty("qualifier") val qualifier:String?, 
    /**
    * Detailed description about the statement
    */
    @JsonProperty("appendent") val appendent:String?, 
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    @JsonProperty("utterance") val utterance:Struct?, 
    /**
    * The list of labels of the statement
    */
    @JsonProperty("labellist") val labellist:List<String>?, 
    /**
    * The version of the statement
    */
    @JsonProperty("version") val version:String?
)