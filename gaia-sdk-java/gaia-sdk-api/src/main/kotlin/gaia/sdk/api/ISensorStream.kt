package gaia.sdk.api

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import gaia.sdk.api.skill.ISkillSpec
import gaia.sdk.api.skill.SkillEvaluation
import gaia.sdk.api.skill.SkillIntrospection
import gaia.sdk.api.skill.SkillRef
import org.reactivestreams.Publisher

interface ISensorStream {
    fun skill(uri: String): SkillRef
}

data class SkillProvisionStatus @JsonCreator constructor(
        @JsonProperty("name") val name: String?,
        @JsonProperty("status") val status: String,
        @JsonProperty("createdAt") val createdAt: String?
)

data class SkillProvisionLogs @JsonCreator constructor(
        @JsonProperty("logLines") val logLines: List<String>
)
