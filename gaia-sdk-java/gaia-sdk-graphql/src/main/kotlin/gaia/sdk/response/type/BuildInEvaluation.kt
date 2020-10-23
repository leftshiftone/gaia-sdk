package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class BuildInEvaluation @JsonCreator constructor(
    @JsonProperty("behaviour") val behaviour:String? = null, 
    @JsonProperty("gaiaquery") val gaiaquery:String? = null
)