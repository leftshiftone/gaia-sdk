package gaia.sdk.rain

import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.api.ClientOptions
import gaia.sdk.api.ITransporter
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.reactivestreams.Publisher

class RainClientTest {

    @Test
    fun testQuery() {
        val transporter = AssertionTransporter()
        val client = RainClientBuilder.custom(transporter)
                .withApiKey("apikey")
                .withSecret("secret")
                .build()

        val request = RainRequest.query {
            insights("abc") {
                classify("text") {
                    qualifier()
                    reference()
                    score()
                }
            }
        }

        client.query(request)
    }

    private class AssertionTransporter : ITransporter {
        override fun <T> transport(options: ClientOptions, type: Class<T>, payload: ByteArray): Publisher<T> {
            val map = ObjectMapper().readValue(payload, Map::class.java)

            assertEquals(mapOf("identity1" to "abc", "text1" to "text"), map["variables"])
            assertEquals("query rain(\$identity1: String!, \$text1: String!) { insights(identity:\$identity1) { classify(text:\$text1) { qualifier reference score } } }", map["statement"])
            return Publisher { it.onComplete() }
        }

    }

}
