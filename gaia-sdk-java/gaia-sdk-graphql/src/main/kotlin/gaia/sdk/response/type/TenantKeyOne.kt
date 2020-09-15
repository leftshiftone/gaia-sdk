package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* This entity represents the output of a delete tenant impulse
*/
data class TenantKeyOne @JsonCreator constructor(
    @JsonProperty("tenantId") val tenantId:Uuid?, 
    @JsonProperty("reference") val reference:Uuid?
)