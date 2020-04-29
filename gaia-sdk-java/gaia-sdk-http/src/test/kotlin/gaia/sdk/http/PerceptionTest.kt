package gaia.sdk.http

import gaia.sdk.request.input.PerceiveActionImpulse
import gaia.sdk.request.input.PerceiveDataImpulse
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import reactor.core.publisher.Flux
import java.util.*
import kotlin.collections.HashMap

class PerceptionTest {

    @Test
    fun `test perceive data`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = PerceiveDataImpulse(UUID.randomUUID().toString(), "test", HashMap())

        val publisher = gaiaRef.perceiveData(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test perceive action`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = PerceiveActionImpulse(false, UUID.randomUUID().toString(), "test", HashMap())

        val publisher = gaiaRef.perceiveAction(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test perceive`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
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
