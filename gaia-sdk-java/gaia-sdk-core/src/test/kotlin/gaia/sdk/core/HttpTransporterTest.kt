package gaia.sdk.core

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import com.github.tomakehurst.wiremock.WireMockServer
import com.github.tomakehurst.wiremock.client.WireMock.*
import com.github.tomakehurst.wiremock.core.WireMockConfiguration
import com.github.tomakehurst.wiremock.extension.Parameters
import com.github.tomakehurst.wiremock.http.HttpHeader
import com.github.tomakehurst.wiremock.http.Request
import com.github.tomakehurst.wiremock.matching.MatchResult
import com.github.tomakehurst.wiremock.matching.RequestMatcherExtension
import gaia.sdk.HMACCredentials
import gaia.sdk.JWTCredentials
import gaia.sdk.http.HMACTokenBuilder
import gaia.sdk.spi.ClientOptions
import io.reactivex.Flowable
import org.junit.jupiter.api.*
import java.util.*
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class HttpTransporterTest {

    val wireMockServer = WireMockServer(WireMockConfiguration().port(8083).extensions(HMACAuthHeaderMatcher()))

    companion object {
        val jsonParser = ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
        val HMAC_CREDENTIALS = HMACCredentials("mockedApiKey", "mockedApiSecret")
        val API_SECRET = ClientOptions(HMAC_CREDENTIALS)
        val A_STANDARD_RESPONSE =
                jsonParser.writeValueAsString(
                    mapOf("data" to mapOf(
                            "retrieve" to mapOf(
                                    "knowledge" to mapOf(
                                            "intent" to mapOf(
                                                    "qualifier" to "qualifierOfIntent")

                                    )
                            )
                    ))
                )
    }

    @BeforeEach
    fun setup() {
        wireMockServer.start()
    }

    @AfterEach
    fun teardown() {
        wireMockServer.stop()
    }

    @AfterAll
    fun shutdown() {
        wireMockServer.shutdown()
    }

    fun configureStub(authSchema: String, errorCode: Int = 200, responseBody: ByteArray = A_STANDARD_RESPONSE.toByteArray()) {
        val stub = post(urlEqualTo("/api/entity"))
                .withHeader("Authorization", matching("$authSchema.*"))
                .willReturn(aResponse().withHeader("Content-Type", "application/json")
                        .withStatus(errorCode)
                        .withBody(responseBody))
        if (authSchema == "HMAC") {
            stub.andMatching("HMAC-Authorization-Header-Matcher", Parameters.one("clientOptions", API_SECRET))
        }
        wireMockServer.stubFor(stub)
    }

    @Test
    fun `successful request with HMAC Credentials`() {
        configureStub("HMAC")
        val gaiaRef = Gaia.connect("http://localhost:8083", HMAC_CREDENTIALS)
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it.qualifier == "qualifierOfIntent"
        }
    }

    @Test
    fun `failed request with HMAC Credentials and JSON payload`() {
        val responsePayload = """{ "some": "response-value" }"""
        configureStub("HMAC", errorCode = 400, responseBody = responsePayload.toByteArray())
        val gaiaRef = Gaia.connect("http://localhost:8083", HMAC_CREDENTIALS)
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertError {
            it.message == "Error with status code 400 (Bad Request) and payload: ${responsePayload}"
        }
    }

    @Test
    fun `failed request with HMAC Credentials and empty payload`() {
        configureStub("HMAC", errorCode = 400, responseBody = ByteArray(0))
        val gaiaRef = Gaia.connect("http://localhost:8083", HMAC_CREDENTIALS)
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertError {
            it.message == "Error with status code 400 (Bad Request) and no payload"
        }
    }

    @Test
    fun `successful request with with JWT`() {
        configureStub("Bearer")
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("685168496841"))
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0) {
            it.qualifier == "qualifierOfIntent"
        }
    }

    @Test
    fun `successful request with with JWT and empty payload`() {
        configureStub("Bearer", responseBody = ByteArray(0))
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("685168496841"))
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(0)
    }

    @Test
    fun `failed request with JWT and JSON payload`() {
        val responsePayload = """{ "some": "response-value" }"""
        configureStub("Bearer", errorCode = 400, responseBody = responsePayload.toByteArray())
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertError {
            it.message == "Error with status code 400 (Bad Request) and payload: ${responsePayload}"
        }
    }

    @Test
    fun `failed request with JWT and HTML payload`() {
        val responsePayload = """<html><head></head><body>hello</body></html>"""
        configureStub("Bearer", errorCode = 400, responseBody = responsePayload.toByteArray())
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertError {
            it.message == "Error with status code 400 (Bad Request) and payload: ${responsePayload}"
        }
    }

    @Test
    fun `failed request with JWT and empty payload`() {
        configureStub("Bearer", errorCode = 400, responseBody = ByteArray(0))
        val gaiaRef = Gaia.connect("http://localhost:8083", JWTCredentials("684684"))
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(10, TimeUnit.SECONDS)
        ts.assertError {
            it.message == "Error with status code 400 (Bad Request) and no payload"
        }
    }
}


class HMACAuthHeaderMatcher : RequestMatcherExtension() {
    override fun getName(): String {
        return "HMAC-Authorization-Header-Matcher"
    }

    override fun match(request: Request, parameters: Parameters): MatchResult {
        val clientOptions: ClientOptions = parameters.get("clientOptions") as ClientOptions
        return MatchResult.of(verifyHMACToken(request.headers.getHeader("Authorization"), request.body, clientOptions))
    }

    fun verifyHMACToken(authHeader: HttpHeader, requestBody: ByteArray, clientOptions: ClientOptions): Boolean {
        val authHeaderValue = authHeader.firstValue()
        val splitToken = authHeaderValue.split("_")
        DecodedToken(splitToken.get(0), splitToken.get(1), splitToken.get(2).toLong(), splitToken.get(3))
        return verify(authHeaderValue.split(" ").get(1), requestBody, clientOptions)
    }

    fun extractToken(token: String): DecodedToken {
        val splits = token.split("_")
        try {
            return DecodedToken(splits.get(0), splits.get(1), splits.get(2).toLong(), splits.get(3))
        } catch (ex: Exception) {
            throw Exception("Token elements cannot be extracted")
        }
    }

    fun verify(token: String, payload: ByteArray, clientOptions: ClientOptions): Boolean {
        val decodedToken = extractToken(token)
        if (decodedToken.apiKeyName.isBlank() || decodedToken.signatureAsBase64.isBlank()) {
            throw Exception("Key or signature is missing")
        }
        val tokenReplica = HMACTokenBuilder()
                .withClientOptions(clientOptions)
                .withNonce(decodedToken.nonce)
                .withTimestamp(decodedToken.timestamp)
                .withPayload(payload)
                .build()

        val decodedTokenReplica = extractToken(tokenReplica)
        if (decodedToken.signatureAsBase64 != decodedTokenReplica.signatureAsBase64) {
            throw Exception("Signature verification failed")
        }
        return true
    }

    data class DecodedToken(val apiKeyName: String, val signatureAsBase64: String, val timestamp: Long, val nonce: String)

}
