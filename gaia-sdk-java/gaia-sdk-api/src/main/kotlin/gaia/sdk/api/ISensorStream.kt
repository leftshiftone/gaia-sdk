package gaia.sdk.api

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import gaia.sdk.api.data.DataRef
import gaia.sdk.api.identity.IdentityOp
import gaia.sdk.api.skill.SkillRef

interface ISensorStream {
    fun skill(uri: String): SkillRef
    fun data(uri: String): DataRef
    fun identity(): IdentityOp
}

data class SkillProvisionStatus @JsonCreator constructor(
        @JsonProperty("name") val name: String?,
        @JsonProperty("status") val status: String,
        @JsonProperty("createdAt") val createdAt: String?
)

data class SkillProvisionLogs @JsonCreator constructor(
        @JsonProperty("logLines") val logLines: List<String>
)

data class SkillProvisionBuildCanceledResponse @JsonCreator constructor(
    @JsonProperty("reference") val reference: String
)
