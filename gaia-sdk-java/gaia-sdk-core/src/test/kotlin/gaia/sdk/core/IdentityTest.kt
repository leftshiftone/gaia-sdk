package gaia.sdk.core

import com.github.tomakehurst.wiremock.WireMockServer
import com.github.tomakehurst.wiremock.client.WireMock
import com.github.tomakehurst.wiremock.core.WireMockConfiguration
import gaia.sdk.JWTCredentials
import gaia.sdk.http.TransporterFactory
import io.reactivex.Flowable
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.fail
import org.junit.jupiter.api.*
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class IdentityTest {

    private val wireMockServer = WireMockServer(WireMockConfiguration().port(8083).extensions(HMACAuthHeaderMatcher()))

    @BeforeEach
    fun setup() {
        Gaia.transporterFactory = TransporterFactory()
        wireMockServer.start()
    }

    @AfterEach
    fun teardown() {
        wireMockServer.stop()
    }

    @BeforeAll
    fun resetWiremock() {
        wireMockServer.resetAll()
    }

    @AfterAll
    fun shutdownServer() {
        wireMockServer.shutdown()
    }

    private fun configureStub(authSchema: String, errorCode: Int = 200, responseFile: String, uri: String) {
        val stub = WireMock.post(WireMock.urlEqualTo(uri))
                .withHeader("Authorization", WireMock.matching("$authSchema.*"))
                .willReturn(WireMock.aResponse().withHeader("Content-Type", "application/json")
                        .withStatus(errorCode)
                        .withBodyFile(responseFile))

        wireMockServer.stubFor(stub)
    }

    @Test
    fun `successful identity export`() {
        // Imagine there's an identity instead of the text file
        configureStub("Bearer", errorCode = 200, responseFile = "ok_download_file.txt", uri = "/api/identity/source")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val identityRef = gaiaRef.identity()
        val ts = Flowable.fromPublisher(identityRef.export("00000000-0000-0000-0000-000000000000")).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
    }

    @Test
    fun `failed identity export due to missing identity id`() {
        configureStub("Bearer", errorCode = 200, responseFile = "ok_download_file.txt", uri = "/api/data/source")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val identityRef = gaiaRef.identity()
        try {
            Flowable.fromPublisher(identityRef.export("")).test()
            fail<String>("No exception thrown")
        } catch (e: AssertionError) {
            assertThat(e.message).isEqualTo("Identity ID must be set in order to export an identity")
        }
    }

    @Test
    @Disabled("Local execution only")
    fun `successful identity export (local e2e)`() {
        val gaiaCredentials = Gaia.login("http://localhost:8080", UsernamePasswordCredentials("admin", "admin"))
        val gaiaRef = Gaia.connect("http://localhost:8080", gaiaCredentials)
        val identityRef = gaiaRef.identity()
        val ts = Flowable.fromPublisher(identityRef.export("d32829c8-5900-4346-9577-25e8146d1e78")).test()
        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it.length() == 28311.toLong()
        }
    }
}
