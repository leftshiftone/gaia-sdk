package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* this type represents the prompt information
*/
data class Prompt @JsonCreator constructor(
    /**
    * The prompt id
    */
    @JsonProperty("identityId") val identityId:Uuid?, 
    /**
    * The prompt reference id
    */
    @JsonProperty("reference") val reference:Uuid?, 
    /**
    * The name of the prompt
    */
    @JsonProperty("qualifier") val qualifier:String?, 
    /**
    * Detailed description about the prompt
    */
    @JsonProperty("appendent") val appendent:String?, 
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    @JsonProperty("utterance") val utterance:Struct?, 
    /**
    * The list of labels of the prompt
    */
    @JsonProperty("labelList") val labelList:List<String>?, 
    /**
    * The version of the prompt
    */
    @JsonProperty("version") val version:String?
)