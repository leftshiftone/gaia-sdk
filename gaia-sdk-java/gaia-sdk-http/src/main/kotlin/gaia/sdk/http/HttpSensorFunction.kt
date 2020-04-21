package gaia.sdk.http

import gaia.sdk.GaiaClientBuilder
import gaia.sdk.GaiaRequest
import gaia.sdk.request.input.PerceiveActionImpulse
import gaia.sdk.request.input.PerceiveDataImpulse
import gaia.sdk.request.type.*
import reactor.netty.http.client.HttpClient

class HttpSensorFunction {

    private val client = GaiaClientBuilder(HttpTransport("", HttpClient.create()))
            .withApiKey("")
            .withSecret("")
            .build()

    // Retrieve functions
    // ******************

    fun retrieve(config: Retrieval.() -> Unit) =
            client.query(GaiaRequest.query { retrieve(config) })

    fun retrieveKnowledge(config: Knowledge.() -> Unit) =
            client.query(GaiaRequest.query { retrieve { knowledge(config) } })

    fun retrieveExperience(config: Experience.() -> Unit) =
            client.query(GaiaRequest.query { retrieve { experience(config) } })

    fun introspect(config: Introspection.() -> Unit) =
            client.query(GaiaRequest.query { introspect(config) })

    fun preserve(config: Preservation.() -> Unit) =
            client.mutation(GaiaRequest.mutation { preserve(config) })

    fun perceive(config: Perception.() -> Unit) =
            client.mutation(GaiaRequest.mutation { perceive(config) })

    fun perceiveAction(impulse: PerceiveActionImpulse) =
            perceive { perceiveAction(impulse) { id() } }

    fun perceiveData(impulse: PerceiveDataImpulse) =
            perceive { perceiveData(impulse) { id() } }

}
