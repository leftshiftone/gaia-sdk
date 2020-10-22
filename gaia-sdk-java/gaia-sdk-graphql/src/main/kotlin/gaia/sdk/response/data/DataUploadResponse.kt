import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

interface DataResponse
data class DataUploadResponse @JsonCreator constructor(@JsonProperty("uploadId") val uploadId: String) : DataResponse
data class DataUploadChunkResponse @JsonCreator constructor(@JsonProperty("uploadId")val uploadId: String, @JsonProperty("chunkId") val chunkId: String)
