package gaia.sdk.core

import gaia.sdk.GaiaCredentials
import io.reactivex.Flowable
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import java.util.*
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
abstract class SkillTest() {

    lateinit var credentials : GaiaCredentials

    @BeforeAll
    fun beforeAll() {
        credentials= retrieveCredentials()
    }

    abstract fun retrieveCredentials(): GaiaCredentials


    @Test
    fun `test start skill provision`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val skillRef = gaiaRef.skill("skillProvision://mockTenant/mockSkillProvisionReference")

        val ts = Flowable.fromPublisher(skillRef.start()).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertNoValues()
    }

    @Test
    fun `test stop skill provision`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val skillRef = gaiaRef.skill("skillProvision://mockTenant/mockSkillProvisionReference")

        val ts = Flowable.fromPublisher(skillRef.stop()).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertNoValues()
    }

    @Test
    fun `test skill provision status`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val skillRef = gaiaRef.skill("skillProvision://mockTenant/mockSkillProvisionReference")

        val ts = Flowable.fromPublisher(skillRef.status()).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()

        val status = ts.values().first()
        Assertions.assertThat(status.createdAt).isEqualTo("01.01.1970")
        Assertions.assertThat(status.name).isEqualTo("mockSkillName")
        Assertions.assertThat(status.status).isEqualTo("mockStatus")
    }

    @Test
    fun `test skill provision logs`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val skillRef = gaiaRef.skill("skillProvision://mockTenant/mockSkillProvisionReference")

        val ts = Flowable.fromPublisher(skillRef.logs()).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()

        val logs = ts.values()
        Assertions.assertThat(logs).containsExactlyInAnyOrder("mock log line 1", "mock log line 2")
    }

}
