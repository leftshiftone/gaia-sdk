package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents identity information
*/
data class Identity @JsonCreator constructor(
    /**
    * The identity id
    */
    @JsonProperty("identityId") val identityId:Uuid? = null, 
    /**
    * The tenant id
    */
    @JsonProperty("tenantId") val tenantId:Uuid? = null, 
    /**
    * The name of the identity
    */
    @JsonProperty("qualifier") val qualifier:String? = null, 
    /**
    * The available languages of the identity
    */
    @JsonProperty("availableLanguages") val availableLanguages:Struct? = null, 
    /**
    * The order of languages that will be use in case of missing translations
    */
    @JsonProperty("languageOrder") val languageOrder:List<String>? = null
)