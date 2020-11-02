package gaia.sdk.api.data.request

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class CompleteBinaryWriteImpulse @JsonCreator constructor(
        @JsonProperty("uri") val uri: String,
        @JsonProperty("uploadId")val uploadId: String,
        @JsonProperty("chunks") val chunks: List<String>)
