package gaia.sdk.api.skill

import gaia.sdk.GaiaStreamingClient
import gaia.sdk.api.ISensorStream
import gaia.sdk.api.SkillProvisionLogs
import gaia.sdk.api.SkillProvisionStatus
import io.reactivex.Flowable
import org.reactivestreams.Publisher

class SkillRef(private val spec: ISkillSpec, private val client: GaiaStreamingClient) {

    /**
     * Sends the given payload (a map satisfying contract) to this skill provision.
     *
     * The response is wrapped in a [SkillEvaluation].
     */
    fun evaluate(payload: Map<String, Any>): Publisher<SkillEvaluation> {
        return Flowable.fromPublisher(client.transport(SkillEvaluation::class.java, mapOf("uri" to spec.toUri(), "payload" to payload), apiPath = "/skill/evaluate"))
    }

    /**
     * Sends the given payload (a map satisfying contract) to this skill provision with a manually specified namespace/contract. This might be used
     * when sending requests to a skill that implements more than one contract (multi contract skills).
     *
     * The response is wrapped in a [SkillEvaluation].
     */
    fun evaluate(contract: String, payload: Map<String, Any>): Publisher<SkillEvaluation> {
        return Flowable.fromPublisher(client.transport(SkillEvaluation::class.java, mapOf("uri" to spec.toUri(), "contract" to contract, "payload" to payload), apiPath = "/skill/evaluate"))
    }

    fun introspect(): Publisher<SkillIntrospection> {
        return Flowable.empty()
    }

    fun start(): Publisher<Void> {
        return Flowable.fromPublisher(client.transport(Map::class.java, mapOf("uri" to spec.toUri()), "/skill/start")).flatMap { Flowable.empty<Void>() }
    }

    fun stop(): Publisher<Void> {
        return Flowable.fromPublisher(client.transport(Map::class.java, mapOf("uri" to spec.toUri()), "/skill/stop")).flatMap { Flowable.empty<Void>() }
    }

    fun status(): Publisher<SkillProvisionStatus> {
        return client.transport(SkillProvisionStatus::class.java, mapOf("uri" to spec.toUri()), "/skill/status")
    }

    fun logs(numberOfLines: Int? = null): Publisher<String> {
        val responsePublisher = client.transport(SkillProvisionLogs::class.java, mapOf("uri" to spec.toUri(), "numberOfLines" to numberOfLines), "/skill/logs")
        return Flowable.fromPublisher(responsePublisher)
                .flatMap { response -> Flowable.fromIterable(response.logLines) }
    }
}
