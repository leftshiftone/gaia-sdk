package gaia.sdk.api.identity.request

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class CompleteIdentityWriteImpulse @JsonCreator constructor(
        @JsonProperty("uri") val uri: String,
        @JsonProperty("tenantId") val tenantId: String,
        @JsonProperty("identityId") val identityId: String,
        @JsonProperty("identityName") val identityName: String,
        @JsonProperty("uploadId")val uploadId: String,
        @JsonProperty("chunks") val chunks: List<String>,
        @JsonProperty("override") val override: Boolean
)
