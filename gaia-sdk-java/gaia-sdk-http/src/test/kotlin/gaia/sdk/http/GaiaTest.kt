package gaia.sdk.http

import gaia.sdk.request.input.PerceiveDataImpulse
import org.junit.jupiter.api.Test
import reactor.core.publisher.Flux
import java.util.*
import kotlin.collections.HashMap

class GaiaTest {

    @Test
    fun test() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = PerceiveDataImpulse(UUID.randomUUID().toString(), "test", HashMap())

        val publisher = gaiaRef.perceiveData(impulse)
        val result = Flux.from(publisher).blockFirst()

        println(result.id)
    }

}
