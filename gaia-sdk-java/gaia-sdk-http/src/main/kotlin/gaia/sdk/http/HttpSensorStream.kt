package gaia.sdk.http

import gaia.sdk.GaiaCredentials
import gaia.sdk.GaiaStreamingClientBuilder
import gaia.sdk.api.ISensorStream
import gaia.sdk.api.skill.ISkillSpec
import gaia.sdk.api.DataRef
import gaia.sdk.api.skill.SkillRef
import reactor.netty.http.client.HttpClient

class HttpSensorStream(url: String, credentials: GaiaCredentials, transporterFactory: TransporterFactory) : ISensorStream {

    private val client = GaiaStreamingClientBuilder(transporterFactory.create(url + "/api"))
            .withCredentials(credentials)
            .build()

    override fun skill(uri: String): SkillRef {
        return SkillRef(ISkillSpec.toSkillSpec(uri), this.client)
    }

    override fun data(uri: String): DataRef {
        return DataRef(uri, this.client)
    }
}
