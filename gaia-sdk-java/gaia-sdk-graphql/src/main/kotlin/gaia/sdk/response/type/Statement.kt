package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents statement information
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
    @JsonProperty("labelList") val labelList:List<String>?, 
    /**
    * The version of the statement
    */
    @JsonProperty("version") val version:String?
)