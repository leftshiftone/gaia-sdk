package gaia.sdk

import gaia.sdk.response.type.Mutation
import gaia.sdk.response.type.Query
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator

abstract class GaiaResponse {

    data class GaiaQueryResponse @JsonCreator constructor(
        @JsonProperty("data") val data: Query?,
        @JsonProperty("extensions")val extensions: Map<String, Any>?,
        @JsonProperty("errors")val errors: List<Map<String, Any>>?): GaiaResponse()

    data class GaiaMutationResponse @JsonCreator constructor(
        @JsonProperty("data") val data: Mutation?,
        @JsonProperty("extensions") val extensions: Map<String, Any>?,
        @JsonProperty("errors") val errors: List<Map<String, Any>>?): GaiaResponse()

}
