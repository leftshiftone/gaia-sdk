package gaia.sdk.core

import com.github.tomakehurst.wiremock.WireMockServer
import com.github.tomakehurst.wiremock.client.WireMock
import com.github.tomakehurst.wiremock.core.WireMockConfiguration
import gaia.sdk.JWTCredentials
import gaia.sdk.http.TransporterFactory
import io.reactivex.Flowable
import org.junit.jupiter.api.*
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class IdentityTest {

    private val wireMockServer = WireMockServer(WireMockConfiguration().port(8083).extensions(HMACAuthHeaderMatcher()))

    @BeforeEach
    fun setup() {
        Gaia.transporterFactory= TransporterFactory()
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
//    @Disabled("Unfinished test")
    fun `successful identity export`() {
        // Imagine there's an identity instead of the text file
        configureStub("Bearer", errorCode = 200, responseFile = "ok_download_file.txt", uri = "/api/identity/source")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val identityRef = gaiaRef.identity("00000000-0000-0000-0000-000000000000")
        val ts = Flowable.fromPublisher(identityRef.export()).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
    }

    @Test
//    @Disabled("Unfinished test")
    fun `failed identity export due to missing identity id`() {
        configureStub("Bearer", errorCode = 200, responseFile = "ok_download_file.txt", uri = "/api/data/source")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val identityRef = gaiaRef.identity()
        val ts = Flowable.fromPublisher(identityRef.export()).test()

        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(0)

//        ts.assertError { t -> t.message!!.contains("Exporting identity with id") }
//        ts.assertNotComplete()
    }

    @Test
    @Disabled("Local execution only")
    fun `real identity`() {
        val gaiaCredentials = Gaia.login("http://localhost:8080", UsernamePasswordCredentials("admin", "admin"))
        val gaiaRef = Gaia.connect("http://localhost:8080", gaiaCredentials)
        val identityRef = gaiaRef.identity("d32829c8-5900-4346-9577-25e8146d1e78")
        val ts = Flowable.fromPublisher(identityRef.export()).test()
        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        val values = ts.values()
        println(values)
    }
}
