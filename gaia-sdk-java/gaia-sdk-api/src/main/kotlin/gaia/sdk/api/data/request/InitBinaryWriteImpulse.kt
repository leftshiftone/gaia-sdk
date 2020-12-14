package gaia.sdk.api.data.request

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class InitBinaryWriteImpulse @JsonCreator constructor(
        @JsonProperty("uri") val uri: String,
        @JsonProperty("override") val override: Boolean)
