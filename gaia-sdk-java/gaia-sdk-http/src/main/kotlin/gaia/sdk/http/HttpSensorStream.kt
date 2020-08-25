package gaia.sdk.http

import gaia.sdk.GaiaStreamingClientBuilder
import gaia.sdk.GaiaCredentials
import gaia.sdk.api.ISensorStream
import gaia.sdk.api.SkillProvisionLogs
import gaia.sdk.api.SkillProvisionStatus
import gaia.sdk.api.skill.ISkillSpec
import gaia.sdk.api.skill.SkillEvaluation
import gaia.sdk.api.skill.SkillIntrospection
import io.reactivex.Flowable
import org.reactivestreams.Publisher
import reactor.netty.http.client.HttpClient

class HttpSensorStream(url: String, credentials: GaiaCredentials) : ISensorStream {

    private val client = GaiaStreamingClientBuilder(HttpTransporter(url + "/api", HttpClient.create()))
            .withCredentials(credentials)
            .build()

    override fun evaluateSkill(spec: ISkillSpec, payload: Any): Publisher<SkillEvaluation> {
        return Flowable.empty()
    }

    override fun introspectSkill(url: String): Publisher<SkillIntrospection> {
        return Flowable.empty()
    }

    override fun startSkillProvision(uri: String): Publisher<Void> {
        return Flowable.fromPublisher(client.transport(Map::class.java, mapOf("uri" to uri), "/async/control/skill-provision/start")).flatMap { Flowable.empty<Void>() }
    }

    override fun stopSkillProvision(uri: String): Publisher<Void> {
        return Flowable.fromPublisher(client.transport(Map::class.java, mapOf("uri" to uri), "/async/control/skill-provision/stop")).flatMap { Flowable.empty<Void>() }
    }

    override fun skillProvisionStatus(uri: String): Publisher<SkillProvisionStatus> {
        return client.transport(SkillProvisionStatus::class.java, mapOf("uri" to uri), "/async/control/skill-provision/status")
    }

    override fun skillProvisionLogs(uri: String, numberOfLines: Int?): Publisher<String> {
        val responsePublisher = client.transport(SkillProvisionLogs::class.java, mapOf("uri" to uri, "numberOfLines" to numberOfLines), "/async/control/skill-provision/logs")
        return Flowable.fromPublisher(responsePublisher)
                .flatMap { response -> Flowable.fromIterable(response.logLines) }
    }
}