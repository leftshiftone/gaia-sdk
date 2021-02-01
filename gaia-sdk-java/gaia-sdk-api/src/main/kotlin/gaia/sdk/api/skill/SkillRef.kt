package gaia.sdk.api.skill

import gaia.sdk.GaiaStreamClient
import gaia.sdk.api.SkillProvisionBuildCanceledResponse
import gaia.sdk.api.SkillProvisionLogs
import gaia.sdk.api.SkillProvisionStatus
import io.reactivex.Flowable
import org.reactivestreams.Publisher

class SkillRef(private val spec: ISkillSpec, private val client: GaiaStreamClient) {

    /**
     * Sends the given payload (a map satisfying contract) to this skill provision.
     *
     * The response is wrapped in a [SkillEvaluation].
     */
    fun evaluate(payload: Map<String, Any>): Publisher<SkillEvaluation> {
        return Flowable.fromPublisher(client.post(mapOf("uri" to spec.toUri(), "payload" to payload), SkillEvaluation::class.java, "/skill/evaluate"))
    }

    /**
     * Sends the given payload (a map satisfying contract) to this skill provision with a manually specified namespace/contract. This might be used
     * when sending requests to a skill that implements more than one contract (multi contract skills).
     *
     * The response is wrapped in a [SkillEvaluation].
     */
    fun evaluate(contract: String, payload: Map<String, Any>): Publisher<SkillEvaluation> {
        return Flowable.fromPublisher(client.post(mapOf("uri" to spec.toUri(), "contract" to contract, "payload" to payload), SkillEvaluation::class.java, "/skill/evaluate"))
    }

    fun introspect(): Publisher<SkillIntrospection> {
        return Flowable.empty()
    }

    fun start(): Publisher<Void> {
        return Flowable.fromPublisher(client.post(mapOf("uri" to spec.toUri()), Map::class.java, "/skill/start")).flatMap { Flowable.empty<Void>() }
    }

    fun stop(): Publisher<Void> {
        return Flowable.fromPublisher(client.post(mapOf("uri" to spec.toUri()), Map::class.java, "/skill/stop")).flatMap { Flowable.empty<Void>() }
    }

    fun status(): Publisher<SkillProvisionStatus> {
        return client.post(mapOf("uri" to spec.toUri()), SkillProvisionStatus::class.java, "/skill/status")
    }

    fun cancel(): Publisher<SkillProvisionBuildCanceledResponse> {
        return client.post(mapOf("uri" to spec.toUri()), SkillProvisionBuildCanceledResponse::class.java, "/skill/cancel")
    }

    fun logs(numberOfLines: Int? = null): Publisher<String> {
        val responsePublisher = client.post(mapOf("uri" to spec.toUri(), "numberOfLines" to numberOfLines), SkillProvisionLogs::class.java, "/skill/logs")
        return Flowable.fromPublisher(responsePublisher)
                .flatMap { response -> Flowable.fromIterable(response.logLines) }
    }
}
