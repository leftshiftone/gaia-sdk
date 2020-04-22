package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class OnUpdated @JsonCreator constructor(
    @JsonProperty("id") val id:Uuid?, 
    @JsonProperty("identityId") val identityId:Uuid?, 
    @JsonProperty("reference") val reference:Uuid?, 
    @JsonProperty("type") val type:String?
)