package gaia.sdk.http

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
import io.reactivex.Flowable
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import java.util.*
import java.util.concurrent.TimeUnit


class HttpTransportTest1 {

    val wireMockServer = WireMockServer(WireMockConfiguration().port(8083).extensions(HMACAuthHeaderMatcher()))

    companion object{
        val API_SECRET= "mockedApiSecret"
    }
    private val jsonparser = ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)

    @BeforeEach
    fun setup() {
        wireMockServer.start()
    }

    @AfterEach
    fun teardown() {
        wireMockServer.stop()
    }

    fun mockHMACSuccessfulResponse() {
        mockSuccessfulResponse("HMAC-SHA512")
    }

    fun mockHMAC400ErrorResponse() {
        mock400ErrorResponse("HMAC-SHA512")
    }

    fun mockJWTSuccessfulResponse() {
        mockSuccessfulResponse("Bearer")
    }

    fun mockJWT400ErrorResponse() {
        mock400ErrorResponse("Bearer")
    }


    fun mockSuccessfulResponse(authSchema: String) {
        val map=
                mapOf("data" to mapOf(
                        "retrieve" to mapOf(
                                "knowledge" to mapOf(
                                        "intent" to mapOf(
                                                "qualifier" to "qualifierOfIntent")

                                )
                        )
                ))


        wireMockServer.stubFor(post(urlEqualTo("/api/sync"))
                .andMatching("HMAC-Authorization-Header-Matcher", Parameters.one("apiSecret",API_SECRET))
                .withHeader("Authorization", matching("$authSchema.*"))
                .willReturn(aResponse().withHeader("Content-Type", "application/json")
                        .withStatus(200)
                        .withBody(jsonparser.writeValueAsString(map))))
    }

    fun mock400ErrorResponse(authSchema: String) {
        wireMockServer.stubFor(post(urlEqualTo("/api/sync"))
                .withHeader("Authorization", matching("$authSchema.*"))
                .willReturn(aResponse().withHeader("Content-Type", "application/json")
                        .withStatus(400)))
    }

    @Test
    fun `successful request`() {
        mockHMACSuccessfulResponse()
        val gaiaRef = Gaia.connect("http://localhost:8083",  HMACCredentials("mockedApiKey", "mockedApiSecret"))
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.qualifier=="qualifierOfIntent"
        }
    }

    @Test
    fun `response with error`() {
        mockHMAC400ErrorResponse()
        val gaiaRef = Gaia.connect("http://localhost:8083",  HMACCredentials("mockedApiKey", "mockedApiSecret"))
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5, TimeUnit.SECONDS)
        ts.assertError {
            it.message=="Error with status code 400 (Bad Request and payload )"
        }
    }

    @Test
    fun `successful request with JWT Auth`() {
        mockJWTSuccessfulResponse()
        val gaiaRef = Gaia.connect("http://localhost:8083",  JWTCredentials("685168496841"))
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.qualifier=="qualifierOfIntent"
        }
    }

    @Test
    fun `response with error with JWT Auth`() {
        mockJWT400ErrorResponse()
        val gaiaRef = Gaia.connect("http://localhost:8083",  JWTCredentials("684684"))
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5, TimeUnit.SECONDS)
        ts.assertError {
            it.message=="Error with status code 400 (Bad Request and payload )"
        }


    }

}

class HMACAuthHeaderMatcher : RequestMatcherExtension() {
    override fun getName(): String {
        return "HMAC-Authorization-Header-Matcher"
    }

    override fun match(request: Request, parameters: Parameters): MatchResult {
        val secret: String = parameters.getString("apiSecret")
        return MatchResult.of(verifyHMACToken(request.headers.getHeader("Authorization"), secret))
    }

    fun verifyHMACToken(authHeader: HttpHeader, secret: String): Boolean{
//        val authHeaderValue = authHeader.firstValue()
//        val splitToken =authHeaderValue.split("_")
//        DecodedToken(splitToken.get(0),splitToken.get(1),splitToken.get(2).toLong(),splitToken.get(3))

        return true
    }

    data class DecodedToken(val apiKeyName: String, val signatureAsBase64: String, val  timestamp: Long, val nonce: String)


}
