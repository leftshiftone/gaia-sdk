package gaia.sdk.http

import gaia.sdk.HMacCredentials
import gaia.sdk.spi.ClientOptions
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import reactor.netty.http.client.HttpClient

class HttpTransportTest {

    @Test
    fun `build hmac token from GaiaCredentials`() {
        val httpTransport = HttpTransport("http://localhost:8080",  HttpClient.create())
        val timestamp = 1592924470L
        val payloadAsString = "hi"
        val nonce = "353823db-c12b-44b2-b0dc-c4d813c74b24"
        val options = ClientOptions(HMacCredentials("apiKey", "secret"))
        val expectedToken="HMAC-SHA512 apiKey_MzE5ZjQyNzg3ZTgyZGJhNmE3YTBiNjI5ODA5MjIzMzk2YzRhMTg1MmNlOWUwYzhiYTNiZmQ0MTkxY2NlMDg1YTVlMWM0Y2UwM2QzNzNlM2NhYWIxMzcxMTU5MTQxNTJkNzFhMmEwMmY3OGIwNTZmNjA0NTJkZDJlYzg2ZDE1MjU=_1592924470_353823db-c12b-44b2-b0dc-c4d813c74b24"
        val token = httpTransport.buildHmacToken(options, payloadAsString, timestamp, nonce)
        Assertions.assertThat(token).isEqualTo(expectedToken)
    }



}
