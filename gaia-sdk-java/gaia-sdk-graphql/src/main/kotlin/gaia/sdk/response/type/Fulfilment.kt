package gaia.sdk.response.type

import gaia.sdk.api.scalar.*
import gaia.sdk.api.transmitter.*
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* this type represents the fulfilment information
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
    @JsonProperty("labellist") val labellist:List<String>?, 
    /**
    * The version of the fulfilment
    */
    @JsonProperty("version") val version:String?
)