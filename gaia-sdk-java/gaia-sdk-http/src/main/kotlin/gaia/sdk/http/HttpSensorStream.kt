package gaia.sdk.http

import gaia.sdk.GaiaCredentials
import gaia.sdk.GaiaStreamingClientBuilder
import gaia.sdk.api.ISensorStream
import gaia.sdk.api.SkillProvisionLogs
import gaia.sdk.api.SkillProvisionStatus
import gaia.sdk.api.skill.ISkillSpec
import gaia.sdk.api.skill.SkillEvaluation
import gaia.sdk.api.skill.SkillIntrospection
import gaia.sdk.api.skill.SkillRef
import io.reactivex.Flowable
import org.reactivestreams.Publisher
import reactor.netty.http.client.HttpClient

class HttpSensorStream(url: String, credentials: GaiaCredentials) : ISensorStream {

    private val client = GaiaStreamingClientBuilder(HttpTransporter(url + "/api", HttpClient.create()))
            .withCredentials(credentials)
            .build()

    override fun skill(uri: String): SkillRef {
        return SkillRef(ISkillSpec.toSkillSpec(uri), this.client)
    }
}
