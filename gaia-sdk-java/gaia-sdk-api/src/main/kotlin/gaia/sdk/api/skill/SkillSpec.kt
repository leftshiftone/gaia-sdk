package gaia.sdk.api.skill

import gaia.sdk.api.exception.GaiaSdkException
import java.util.*

class ProvisioningOptions {
    val cpu: Optional<Int> = Optional.empty()
    val gpu: Optional<Int> = Optional.empty()
    val memory: Optional<Int> = Optional.empty()
    val replications: Optional<Int> = Optional.empty()
}

data class UnprovisionedSkillSpec(val owner: String,
                                  val name: String,
                                  val version: String,
                                  val options: ProvisioningOptions.() -> Unit = {}) : ISkillSpec {
    override fun toURL() = "skill://$owner/$name/$version"
}

data class ProvisionedSkillSpec(val identityId: UUID, val skillName: String) : ISkillSpec {
    override fun toURL() = "identity://$identityId/$skillName"
}

interface ISkillSpec {
    companion object {
        fun toSkillSpec(url: String): ISkillSpec {
            if (url.startsWith("skill://")) {
                val array = url.split("/+")
                return UnprovisionedSkillSpec(array[1], array[2], array[3])
            }
            if (url.startsWith("identity://")) {
                val array = url.split("/+")
                return ProvisionedSkillSpec(UUID.fromString(array[1]), array[2])
            }
            throw GaiaSdkException("cannot parse skill url $url")
        }
    }

    fun toURL(): String
}