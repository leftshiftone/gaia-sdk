package gaia.sdk.api

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import gaia.sdk.api.skill.ISkillSpec
import gaia.sdk.api.skill.SkillEvaluation
import gaia.sdk.api.skill.SkillIntrospection
import org.reactivestreams.Publisher

interface ISensorStream {
    fun evaluateSkill(spec: ISkillSpec, payload: Any):Publisher<SkillEvaluation>
    fun introspectSkill(url: String):Publisher<SkillIntrospection>
    fun startSkillProvision(uri: String): Publisher<Void>
    fun stopSkillProvision(uri: String): Publisher<Void>
    fun skillProvisionStatus(uri: String): Publisher<SkillProvisionStatus>
    fun skillProvisionLogs(uri: String, numberOfLines: Int): Publisher<String>
}

data class SkillProvisionStatus @JsonCreator constructor(
        @JsonProperty("name") val name: String?,
        @JsonProperty("status") val status: String,
        @JsonProperty("createdAt") val createdAt: String?
)
