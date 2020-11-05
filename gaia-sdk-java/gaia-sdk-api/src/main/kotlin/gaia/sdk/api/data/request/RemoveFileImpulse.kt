package gaia.sdk.api.data.request

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class RemoveFileImpulse @JsonCreator constructor(@JsonProperty("uri") val uri: String)