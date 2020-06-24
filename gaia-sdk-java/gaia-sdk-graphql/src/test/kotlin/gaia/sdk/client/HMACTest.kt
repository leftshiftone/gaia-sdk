package gaia.sdk.client

import org.assertj.core.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

internal class HMACTest {
    lateinit var hmac : HMAC

    @BeforeEach
    fun setup(){
        hmac = HMAC("secretKey")
    }

    @Test
    fun `generate a HMAC Hash for a byteArray`() {
        val expectedHashAsString= "e0a8cd2bbe082f184138444cdbd0d2ea3dd12d70203973b92722c5505067bf90d5234aae459a148128e4bb5a24dc8410eaa5f56039867a41acc3f6c686e130cf"
        Assertions.assertThat(String(hmac.hash("HI".toByteArray()))).isEqualTo(expectedHashAsString)
        Assertions.assertThat(String(hmac.hash("HI".toByteArray()))).isEqualTo(expectedHashAsString)
    }

}