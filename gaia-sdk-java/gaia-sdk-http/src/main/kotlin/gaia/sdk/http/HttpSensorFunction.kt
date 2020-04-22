package gaia.sdk.http

import gaia.sdk.GaiaClientBuilder
import gaia.sdk.GaiaRequest
import gaia.sdk.GaiaResponse
import gaia.sdk.api.ISensorFunction
import gaia.sdk.request.input.*
import gaia.sdk.request.type.*
import gaia.sdk.response.type.Mutation
import gaia.sdk.response.type.Query
import org.reactivestreams.Publisher
import reactor.core.publisher.Flux
import reactor.netty.http.client.HttpClient
import java.lang.RuntimeException

class HttpSensorFunction : ISensorFunction {

    private val client = GaiaClientBuilder(HttpTransport("", HttpClient.create()))
            .withApiKey("")
            .withSecret("")
            .build()

    override fun retrieve(config: Retrieval.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve(config) })) {it.retrieve!!}

    override fun retrieveKnowledge(config: Knowledge.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { knowledge(config) } })) {it.retrieve?.knowledge!!}

    override fun retrieveExperience(config: Experience.() -> Unit) =
            map(client.query(GaiaRequest.query { retrieve { experience(config) } })) {it.retrieve?.experience!!}

    override fun retrieveKnowledgeEdge(config: KnowledgeEdge.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { edges(config) } } })) {it.retrieve?.knowledge?.edges!!}

    override fun retrieveIntents(config: Intent.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { intents(config) } } })) {it.retrieve?.knowledge?.intents!!}

    override fun retrievePrompts(config: Prompt.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { prompts(config) } } })) {it.retrieve?.knowledge?.prompts!!}

    override fun retrieveStatements(config: Statement.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { statements(config) } } })) {it.retrieve?.knowledge?.statements!!}

    override fun retrieveFulfilments(config: Fulfilment.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { fulfilments(config) } } })) {it.retrieve?.knowledge?.fulfilments!!}

    override fun retrieveCode(config: Code.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { codes(config) } } })) {it.retrieve?.knowledge?.codes!!}

    override fun retrieveBehaviour(config: Behaviour.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { retrieve { knowledge { behaviours(config) } } })) {it.retrieve?.knowledge?.behaviours!!}

    override fun introspect(config: Introspection.() -> Unit) =
            map(client.query(GaiaRequest.query { introspect(config) })) {it.introspect!!}

    override fun introspectSkills(config: SkillIntrospection.() -> Unit) =
            flatMap(client.query(GaiaRequest.query { introspect { skills(config) } })) {it.introspect?.skills!!}

    override fun preserve(config: Preservation.() -> Unit) =
            mapM(client.mutation(GaiaRequest.mutation { preserve(config) })) {it.preserve!!}

    override fun preserveCreateIntents(vararg impulses: CreateIntentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { createIntents(impulses) {id()} } })) {it.preserve?.createIntents!!}

    override fun preserveUpdateIntents(vararg impulses: UpdateIntentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { updateIntents(impulses) {id()} } })) {it.preserve?.updateIntents!!}

    override fun preserveCreateIntents(vararg impulses: DeleteIntentImpulse) =
            flatMapM(client.mutation(GaiaRequest.mutation { preserve { deleteIntents(impulses) {id()} } })) {it.preserve?.deleteIntents!!}

    override fun perceive(config: Perception.() -> Unit) =
            mapM(client.mutation(GaiaRequest.mutation { perceive(config) })) {it.perceive!!}

    override fun perceiveAction(impulse: PerceiveActionImpulse) =
            mapM(client.mutation(GaiaRequest.mutation { perceive {perceiveAction(impulse) {id()}} })) {
                it.perceive?.perceiveAction!!
            }

    override fun perceiveData(impulse: PerceiveDataImpulse) =
            mapM(client.mutation(GaiaRequest.mutation { perceive {perceiveData(impulse) {id()}} })) {
                it.perceive?.perceiveData!!
            }

    private fun <T>map(publisher: Publisher<GaiaResponse.QueryResponse>, mapper: (Query) -> T):Publisher<T> {
        return Flux.from(publisher)
                .flatMap {
                    if ((it.errors?: emptyList<Error>()).isNotEmpty()) {
                        val error = it.errors?.first()
                        return@flatMap Flux.error<T>(RuntimeException(error?.message))
                    }
                    return@flatMap Flux.just(mapper(it.data!!))
                }
    }

    private fun <T>mapM(publisher: Publisher<GaiaResponse.MutationResponse>, mapper: (Mutation) -> T):Publisher<T> {
        return Flux.from(publisher)
                .flatMap {
                    if ((it.errors?: emptyList<Error>()).isNotEmpty()) {
                        val error = it.errors?.first()
                        return@flatMap Flux.error<T>(RuntimeException(error?.message))
                    }
                    return@flatMap Flux.just(mapper(it.data!!))
                }
    }

    private fun <T>flatMap(publisher: Publisher<GaiaResponse.QueryResponse>, mapper: (Query) -> List<T>):Publisher<T> {
        return Flux.from(publisher)
                .flatMap {
                    if ((it.errors?: emptyList<Error>()).isNotEmpty()) {
                        val error = it.errors?.first()
                        Flux.error<T>(RuntimeException(error?.message))
                    }
                    else {
                        Flux.fromIterable(mapper(it.data!!))
                    }
                }
    }

    private fun <T>flatMapM(publisher: Publisher<GaiaResponse.MutationResponse>, mapper: (Mutation) -> List<T>):Publisher<T> {
        return Flux.from(publisher)
                .flatMap {
                    if ((it.errors?: emptyList<Error>()).isNotEmpty()) {
                        val error = it.errors?.first()
                        Flux.error<T>(RuntimeException(error?.message))
                    }
                    else {
                        Flux.fromIterable(mapper(it.data!!))
                    }
                }
    }

}
