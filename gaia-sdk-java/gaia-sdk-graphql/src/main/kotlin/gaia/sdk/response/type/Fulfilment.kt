package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents fulfilment information
*/
data class Fulfilment @JsonCreator constructor(
    /**
    * The fulfilment id
    */
    @JsonProperty("identityId") val identityId:Uuid?, 
    /**
    * The fulfilment reference id
    */
    @JsonProperty("reference") val reference:Uuid?, 
    /**
    * The name of the fulfilment
    */
    @JsonProperty("qualifier") val qualifier:String?, 
    /**
    * Detailed description about the fulfilment
    */
    @JsonProperty("appendent") val appendent:String?, 
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    @JsonProperty("utterance") val utterance:Struct?, 
    /**
    * The list of labels of the fulfilment
    */
    @JsonProperty("labelList") val labelList:List<String>?, 
    /**
    * The version of the fulfilment
    */
    @JsonProperty("version") val version:String?
)