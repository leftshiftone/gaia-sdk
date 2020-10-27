package gaia.sdk.api.data.response

import com.fasterxml.jackson.annotation.JsonCreator

data class FileList @JsonCreator constructor(
        val fileListItems: List<FileListing>
)