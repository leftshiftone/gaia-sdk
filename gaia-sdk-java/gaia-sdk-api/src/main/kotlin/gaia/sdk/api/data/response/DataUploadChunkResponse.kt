package gaia.sdk.api.data.response

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class DataUploadChunkResponse @JsonCreator constructor(
        @JsonProperty("uploadId")val uploadId: String,
        @JsonProperty("chunkId") val chunkId: String
)