package gaia.sdk.api.data.response

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class FileListing @JsonCreator constructor(
        @JsonProperty("tenant") val tenant:String,
        @JsonProperty("filePath") val filePath:String
)