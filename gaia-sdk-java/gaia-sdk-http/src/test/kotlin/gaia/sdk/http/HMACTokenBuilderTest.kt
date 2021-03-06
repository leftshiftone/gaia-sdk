package gaia.sdk.http

import gaia.sdk.HMACCredentials
import gaia.sdk.spi.ClientOptions
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test


class HMACTokenBuilderTest {

    @Test
    fun `build hmac token from GaiaCredentials`() {
        val token = HMACTokenBuilder()
                .withTimestamp(1592924470L)
                .withNonce("353823db-c12b-44b2-b0dc-c4d813c74b24")
                .withClientOptions(ClientOptions(HMACCredentials("apiKey", "secret")))
                .withPayload("hi".toByteArray())
                .build()
        val expectedToken="HMAC-SHA512 apiKey_MzE5ZjQyNzg3ZTgyZGJhNmE3YTBiNjI5ODA5MjIzMzk2YzRhMTg1MmNlOWUwYzhiYTNiZmQ0MTkxY2NlMDg1YTVlMWM0Y2UwM2QzNzNlM2NhYWIxMzcxMTU5MTQxNTJkNzFhMmEwMmY3OGIwNTZmNjA0NTJkZDJlYzg2ZDE1MjU=_1592924470_353823db-c12b-44b2-b0dc-c4d813c74b24"
        Assertions.assertThat(token).isEqualTo(expectedToken)
    }



}
