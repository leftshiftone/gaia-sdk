import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

class BinaryWriteChunkImpulse @JsonCreator constructor(
        @JsonProperty("uri") val uri: String,
        @JsonProperty("uploadId")val uploadId: String,
        @JsonProperty("ordinal")val ordinal: Long,
        @JsonProperty("sizeInBytes")val sizeInBytes: Long,
        @JsonProperty("data")val data: ByteArray){
    fun requestParameters(): Map<String, Any> {
        return mapOf("uploadId" to uploadId, "ordinal" to ordinal, "sizeInBytes" to sizeInBytes, "uri" to uri)
    }
}
