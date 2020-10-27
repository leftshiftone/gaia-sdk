package gaia.sdk.api.data.request

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class ListFilesImpulse @JsonCreator constructor( @JsonProperty("uri") val uri: String)