package gaia.sdk

import gaia.sdk.response.type.Mutation
import gaia.sdk.response.type.Query
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator

abstract class GaiaResponse {

    data class QueryResponse @JsonCreator constructor(
        @JsonProperty("data") val data: Query? = null,
        @JsonProperty("extensions")val extensions: Map<String, Any>? = null,
        @JsonProperty("errors")val errors: List<Error>? = null): GaiaResponse()

    data class MutationResponse @JsonCreator constructor(
        @JsonProperty("data") val data: Mutation? = null,
        @JsonProperty("extensions") val extensions: Map<String, Any>? = null,
        @JsonProperty("errors") val errors: List<Error>? = null): GaiaResponse()

    data class Error @JsonCreator constructor(
        @JsonProperty("message") val message: String,
        @JsonProperty("locations") val locations: Array<Location>?,
        @JsonProperty("path") val path: Array<Any>?
    )

    data class Location @JsonCreator constructor(
        @JsonProperty("line") val line: Int,
        @JsonProperty("column") val column: Int
    )

}
