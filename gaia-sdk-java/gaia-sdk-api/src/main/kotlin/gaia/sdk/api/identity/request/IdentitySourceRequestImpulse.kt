package gaia.sdk.api.identity.request

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class IdentitySourceRequestImpulse @JsonCreator constructor(@JsonProperty("identityId") val identityId: String)
