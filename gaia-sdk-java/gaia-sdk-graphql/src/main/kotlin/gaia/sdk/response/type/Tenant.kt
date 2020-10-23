package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents tenant information
*/
data class Tenant @JsonCreator constructor(
    /**
    * The tenant id
    */
    @JsonProperty("tenantId") val tenantId:Uuid? = null, 
    /**
    * The name of the tenant
    */
    @JsonProperty("qualifier") val qualifier:String? = null, 
    /**
    * The list of implicit identities
    */
    @JsonProperty("implicitIdentities") val implicitIdentities:List<String>? = null, 
    /**
    * The list of explicit identities
    */
    @JsonProperty("explicitIdentities") val explicitIdentities:List<String>? = null
)