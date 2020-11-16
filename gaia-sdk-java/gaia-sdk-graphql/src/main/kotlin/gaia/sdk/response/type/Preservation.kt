package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* This type contains all preservation sensor impulses which are used to support
* read/write/delete memory functions in gaia.
*/
data class Preservation @JsonCreator constructor(
    @JsonProperty("create") val create:CreateKnowledge? = null, 
    @JsonProperty("update") val update:UpdateKnowledge? = null, 
    @JsonProperty("delete") val delete:DeleteKnowledge? = null, 
    @JsonProperty("connect") val connect:ConnectKnowledge? = null
)