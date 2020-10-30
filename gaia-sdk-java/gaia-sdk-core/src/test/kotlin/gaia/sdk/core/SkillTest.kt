package gaia.sdk.core

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.GaiaCredentials
import gaia.sdk.GaiaStreamClient
import gaia.sdk.JWTCredentials
import gaia.sdk.api.ISensorStream
import gaia.sdk.api.skill.ISkillSpec
import gaia.sdk.api.skill.SkillEvaluation
import gaia.sdk.api.skill.SkillRef
import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter
import io.mockk.every
import io.mockk.mockk
import io.reactivex.Flowable
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
abstract class SkillTest() {

    lateinit var credentials: GaiaCredentials
    val jsonparser = ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
    @BeforeAll
    fun beforeAll() {
        credentials = retrieveCredentials()
    }

    abstract fun retrieveCredentials(): GaiaCredentials


    @Test
    fun `test start skill provision`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val skillRef = gaiaRef.skill("skillProvision://mockTenant/mockSkillProvisionReference")

        val ts = Flowable.fromPublisher(skillRef.start()).test()
        ts.awaitDone(5, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertNoValues()
    }

    @Test
    fun `test skill evaluation`() {
        val mockedStreamProcessor = mockk<ISensorStream>()
        val mockedTransporter = mockk<ITransporter>()
        every { mockedTransporter.transport<SkillEvaluation>(any(), any(), any(), any()) } returns Flowable.just(SkillEvaluation(mapOf("response" to "hello")))
        every { mockedStreamProcessor.skill(any()) } returns SkillRef(ISkillSpec.toSkillSpec("skillProvision://8db77283-f25b-4cbb-8d26-692bb2672fb3/test"), GaiaStreamClient(ClientOptions(JWTCredentials("")), mockedTransporter))

        val gaiaRef = Gaia.connect(GaiaConfig("", JWTCredentials(""), mockk(), mockk(), mockedStreamProcessor))
        val skillRef = gaiaRef.skill("skillProvision://8db77283-f25b-4cbb-8d26-692bb2672fb3/test")

        val ts = Flowable.fromPublisher(skillRef.evaluate(mapOf("request" to "world!"))).test()
        ts.assertValueCount(1)
        ts.assertValue { it.response == mapOf("response" to "hello") }
    }


    @Test
    fun `test stop skill provision`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val skillRef = gaiaRef.skill("skillProvision://mockTenant/mockSkillProvisionReference")

        val ts = Flowable.fromPublisher(skillRef.stop()).test()
        ts.awaitDone(5, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertNoValues()
    }

    @Test
    fun `test skill provision status`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val skillRef = gaiaRef.skill("skillProvision://mockTenant/mockSkillProvisionReference")

        val ts = Flowable.fromPublisher(skillRef.status()).test()
        ts.awaitDone(5, TimeUnit.SECONDS)
        ts.assertNoErrors()

        val status = ts.values().first()
        Assertions.assertThat(status.createdAt).isEqualTo("01.01.1970")
        Assertions.assertThat(status.name).isEqualTo("mockSkillName")
        Assertions.assertThat(status.status).isEqualTo("mockStatus")
    }

    @Test
    fun `test skill provision logs`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val skillRef = gaiaRef.skill("skillProvision://mockTenant/mockSkillProvisionReference")

        val ts = Flowable.fromPublisher(skillRef.logs()).test()
        ts.awaitDone(5, TimeUnit.SECONDS)
        ts.assertNoErrors()

        val logs = ts.values()
        Assertions.assertThat(logs).containsExactlyInAnyOrder("mock log line 1", "mock log line 2")
    }

}
