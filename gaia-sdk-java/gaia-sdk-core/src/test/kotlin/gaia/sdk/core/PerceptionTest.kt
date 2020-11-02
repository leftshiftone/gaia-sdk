package gaia.sdk.core

import gaia.sdk.GaiaCredentials
import gaia.sdk.GaiaResponse
import gaia.sdk.http.TransporterFactory
import gaia.sdk.request.input.PerceiveActionImpulse
import gaia.sdk.request.input.PerceiveDataImpulse
import gaia.sdk.response.type.Mutation
import gaia.sdk.response.type.PerceivedImpulse
import gaia.sdk.response.type.Perception
import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter
import io.reactivex.Flowable
import org.assertj.core.api.Assert
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.*
import org.reactivestreams.Publisher
import reactor.core.publisher.Flux
import java.util.*
import kotlin.collections.HashMap

class MockTransporterFactory(private val mockHandler: (MockRequest) -> Publisher<Any>): TransporterFactory() {
    override fun create(url: String): ITransporter {
        return MockTransporter(mockHandler)
    }
}

data class MockRequest(
        val options: ClientOptions,
        val type: Class<Any>,
        val payload: Any,
        val apiPath: String
)

class MockTransporter(private val mockHandler: (MockRequest) -> Publisher<Any>): ITransporter {
    override fun <T> transport(options: ClientOptions, payload: Any, type: Class<T>, apiPath: String, queryParameters: Map<String, Any>): Publisher<T> {
        return mockHandler(MockRequest(options, type as Class<Any>, payload, apiPath)) as Publisher<T>
    }

    override fun <T> transport(options: ClientOptions, payload: Any, type: Class<T>, apiPath: String): Publisher<T> {
        return mockHandler(MockRequest(options, type as Class<Any>, payload, apiPath)) as Publisher<T>
    }

    override fun <T> transport(options: ClientOptions, payload: Any, type: Class<T>): Publisher<T> {
        return mockHandler(MockRequest(options, type as Class<Any>, payload,"")) as Publisher<T>
    }
}

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
abstract class PerceptionTest {

    lateinit var credentials : GaiaCredentials

    @BeforeAll
    fun beforeAll() {
        credentials= retrieveCredentials()
    }

    abstract fun retrieveCredentials(): GaiaCredentials

    @Test
    fun `test perceive data`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(perceive = Perception(perceiveData = PerceivedImpulse(UUID.randomUUID().toString()))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = PerceiveDataImpulse(UUID.randomUUID().toString(), "test", HashMap())

        val publisher = gaiaRef.perceiveData(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test perceive action`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(perceive = Perception(perceiveAction = PerceivedImpulse(UUID.randomUUID().toString()))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = PerceiveActionImpulse(false, UUID.randomUUID().toString(), "test", HashMap())

        val publisher = gaiaRef.perceiveAction(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test perceive`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(perceive = Perception(perceiveAction = PerceivedImpulse(UUID.randomUUID().toString()), perceiveData = PerceivedImpulse(UUID.randomUUID().toString()))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse1 = PerceiveActionImpulse(false, UUID.randomUUID().toString(), "test", HashMap())
        val impulse2 = PerceiveDataImpulse(UUID.randomUUID().toString(), "test", HashMap())

        val publisher = gaiaRef.perceive {
            perceiveAction(impulse1) {id()}
            perceiveData(impulse2) {id()}
        }
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!)
        Assertions.assertNotNull(result.perceiveAction)
        Assertions.assertNotNull(result.perceiveAction!!.id)
        Assertions.assertNotNull(result.perceiveData)
        Assertions.assertNotNull(result.perceiveData!!.id)
    }

}
