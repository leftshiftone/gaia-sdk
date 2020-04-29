package gaia.sdk.http

import gaia.sdk.request.input.CreateIntentImpulse
import gaia.sdk.request.input.DeleteIntentImpulse
import gaia.sdk.request.input.UpdateIntentImpulse
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import reactor.core.publisher.Flux
import java.util.*

class PreservationTest {

    @Test
    fun `test preserve create intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = CreateIntentImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveCreateIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = UpdateIntentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveUpdateIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = DeleteIntentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

}
