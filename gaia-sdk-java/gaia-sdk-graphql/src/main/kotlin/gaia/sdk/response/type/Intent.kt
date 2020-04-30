package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* this type represents the intent information
*/
data class Intent @JsonCreator constructor(
    /**
    * The identity id
    */
    @JsonProperty("identityId") val identityId:Uuid?, 
    /**
    * The intent reference id
    */
    @JsonProperty("reference") val reference:Uuid?, 
    /**
    * The name of the intent
    */
    @JsonProperty("qualifier") val qualifier:String?, 
    /**
    * Detailed description about the intent
    */
    @JsonProperty("appendent") val appendent:String?, 
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    @JsonProperty("utterance") val utterance:Struct?, 
    /**
    * The list of labels of the intent
    */
    @JsonProperty("labellist") val labellist:List<String>?, 
    /**
    * The version of the intent
    */
    @JsonProperty("version") val version:String?
)