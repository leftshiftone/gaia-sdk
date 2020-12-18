package gaia.sdk.api.data.response

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class IdentityImportResponse @JsonCreator constructor(
        @JsonProperty("partitionKey") val partitionKey: String,
        @JsonProperty("uri") val uri: String
)
