package gaia.sdk.api.data.response

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class FileRemovedImpulse @JsonCreator constructor(
        @JsonProperty("fileExisted") val fileExisted: Boolean
)