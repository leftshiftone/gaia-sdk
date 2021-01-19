package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Represents Role information
*/
data class Role @JsonCreator constructor(
    /**
    * Id of the tenant
    */
    @JsonProperty("tenantId") val tenantId:Uuid? = null, 
    /**
    * Id of the role
    */
    @JsonProperty("roleId") val roleId:Uuid? = null, 
    /**
    * The name of the role
    */
    @JsonProperty("name") val name:String? = null, 
    /**
    * The permissions of the role
    */
    @JsonProperty("permissions") val permissions:List<String>? = null
)