package gaia.sdk.core

import gaia.sdk.GaiaCredentials
import gaia.sdk.request.input.PerceiveActionImpulse
import gaia.sdk.request.input.PerceiveDataImpulse
import org.junit.jupiter.api.*
import reactor.core.publisher.Flux
import java.util.*
import kotlin.collections.HashMap

@Disabled
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
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = PerceiveDataImpulse(UUID.randomUUID().toString(), "test", HashMap())

        val publisher = gaiaRef.perceiveData(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test perceive action`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = PerceiveActionImpulse(false, UUID.randomUUID().toString(), "test", HashMap())

        val publisher = gaiaRef.perceiveAction(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test perceive`() {
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
