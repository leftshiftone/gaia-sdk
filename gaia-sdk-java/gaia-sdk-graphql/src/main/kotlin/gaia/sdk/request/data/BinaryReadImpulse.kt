import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class BinaryReadImpulse @JsonCreator constructor(@JsonProperty("uri") val uri: String)