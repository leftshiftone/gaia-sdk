package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents intent information
*/
data class Intent @JsonCreator constructor(
    /**
    * The identity id
    */
    @JsonProperty("identityId") val identityId:Uuid? = null, 
    /**
    * The intent reference id
    */
    @JsonProperty("reference") val reference:Uuid? = null, 
    /**
    * The name of the intent
    */
    @JsonProperty("qualifier") val qualifier:String? = null, 
    /**
    * Detailed description about the intent
    */
    @JsonProperty("appendent") val appendent:String? = null, 
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    @JsonProperty("utterance") val utterance:Struct? = null, 
    /**
    * The list of labels of the intent
    */
    @JsonProperty("labelList") val labelList:List<String>? = null, 
    /**
    * The version of the intent
    */
    @JsonProperty("version") val version:String? = null
)