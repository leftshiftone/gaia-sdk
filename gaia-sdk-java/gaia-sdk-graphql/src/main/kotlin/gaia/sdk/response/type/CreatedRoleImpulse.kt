package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* Impulse which indicates the result of a create role impulse
*/
data class CreatedRoleImpulse @JsonCreator constructor(
    @JsonProperty("id") val id:Uuid?, 
    @JsonProperty("data") val data:User?
)