package gaia.sdk.api.skill

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class SkillEvaluation @JsonCreator constructor(@JsonProperty("payload") val response: Map<String, Any>)
