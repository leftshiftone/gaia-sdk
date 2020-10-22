import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
data class FileList @JsonCreator constructor( val fileListItems: List<FileListing>)
data class FileListing @JsonCreator constructor(
        @JsonProperty("tenant") val tenant:String,
        @JsonProperty("filePath") val filePath:String): DataResponse
