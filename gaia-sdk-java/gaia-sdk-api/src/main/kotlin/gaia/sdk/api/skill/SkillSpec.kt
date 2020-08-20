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
    override fun toUri() = "skill://$owner/$name/$version"

    // TODO
    /**
     * find skill by uri
     * create skill provision from skill
     * transform to provisioned skill spec?
     */
}

data class ProvisionedSkillSpec(val uri: String) : ISkillSpec {
    override fun toUri() = uri
}

interface ISkillSpec {
    companion object {
        fun toSkillSpec(uri: String): ISkillSpec {
            if (uri.startsWith("skill://")) {
                val array = uri.split("/+")
                return UnprovisionedSkillSpec(array[1], array[2], array[3])
            }
            if (uri.startsWith("skillProvision://")) {
                return ProvisionedSkillSpec(uri)
            }
            throw GaiaSdkException("cannot parse skill url $uri")
        }
    }

    fun toUri(): String
}
