package gaia.sdk.http

import gaia.sdk.GaiaCredentials
import gaia.sdk.GaiaStreamingClientBuilder
import gaia.sdk.api.ISensorStream
import gaia.sdk.api.skill.ISkillSpec
import gaia.sdk.api.skill.SkillRef

class HttpSensorStream(url: String, credentials: GaiaCredentials, transporterFactory: TransporterFactory) : ISensorStream {

    private val client = GaiaStreamingClientBuilder(transporterFactory.create(url + "/api"))
            .withCredentials(credentials)
            .build()

    override fun skill(uri: String): SkillRef {
        return SkillRef(ISkillSpec.toSkillSpec(uri), this.client)
    }
}
