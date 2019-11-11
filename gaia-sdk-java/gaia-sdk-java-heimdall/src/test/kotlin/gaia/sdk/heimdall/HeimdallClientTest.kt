package gaia.sdk.heimdall

import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.api.ClientOptions
import gaia.sdk.api.ITransporter
import gaia.sdk.heimdall.HeimdallRequest.HeimdallMutationRequest.Impulse
import gaia.sdk.heimdall.HeimdallRequest.HeimdallMutationRequest.ImpulseContext.ImpulseContextHeader
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.reactivestreams.Publisher

class HeimdallClientTest {

    @Test
    fun test() {
        val transporter = AssertionTransporter()
        val client = HeimdallClientBuilder.custom(transporter)
                .withApiKey("apikey")
                .withSecret("secret")
                .build()

        val impulse = Impulse()
        impulse.impulsePayload = "test".toByteArray()
        impulse.impulseHeader = Impulse.ImpulseHeader()
        impulse.impulseHeader.clientId = "a"
        impulse.impulseHeader.identityId = "b"
        impulse.impulseHeader.userId = "c"

        val impulse2 = HeimdallRequest.HeimdallMutationRequest.ImpulseContext()
        impulse2.impulseContextPayload = "test".toByteArray()
        impulse2.impulseContextHeader = ImpulseContextHeader()
        impulse2.impulseContextHeader.clientId = "a"
        impulse2.impulseContextHeader.identityId = "b"
        impulse2.impulseContextHeader.userId = "c"

        val request = HeimdallRequest.mutation {
            dispatchImpulse(impulse)
            dispatchImpulseContext(impulse2)
        }
        client.mutation(request)
    }

    private class AssertionTransporter : ITransporter {
        override fun <T> transport(options: ClientOptions, type: Class<T>, payload: ByteArray): Publisher<T> {
            val map = ObjectMapper().readValue(payload, Map::class.java)

            assertThat(map["variables"])
                    .isEqualTo(mapOf("impulse1" to mapOf("impulsePayload" to "dGVzdA==", "impulseHeader" to mapOf("identityId" to "b", "clientId" to "a", "userId" to "c")), "impulse2" to mapOf("impulseContextPayload" to "dGVzdA==", "impulseContextHeader" to mapOf("identityId" to "b", "clientId" to "a", "userId" to "c"))))
            assertThat(map["statement"])
                    .isEqualTo("mutation heimdall(\$impulse1: Impulse!, \$impulse2: ImpulseContext!) { dispatchImpulse(impulse:\$impulse1) dispatchImpulseContext(impulse:\$impulse2) }")
            return Publisher { it.onComplete() }
        }
    }

}
