package gaia.sdk.client

import org.assertj.core.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import java.util.*

internal class HMACTest {
    lateinit var hmac : HMAC

    @BeforeEach
    fun setup(){
        hmac = HMAC("secretKey")
    }

    @Test
    fun `generate a HMAC Hash for a byteArray`() {
        val generatedHash = hmac.hash("HI".toByteArray())
        val expectedHashAsString= "e0a8cd2bbe082f184138444cdbd0d2ea3dd12d70203973b92722c5505067bf90d5234aae459a148128e4bb5a24dc8410eaa5f56039867a41acc3f6c686e130cf"
        Assertions.assertThat(String(generatedHash)).isEqualTo(expectedHashAsString)
    }






    @Test
    fun `generate a HMAC aHash for a byteArray`() {
        val encodedString = Base64.getEncoder().encodeToString("hi".toByteArray()) //aGk=
        val timestamp = 1592924470//Instant.now().epochSecond
        val nonce = "353823db-c12b-44b2-b0dc-c4d813c74b24"//UUID.randomUUID().toString()
        val toBeHashed = arrayOf(encodedString, "application/json", "http", timestamp, nonce).joinToString("_")
        val signature = HMAC("secret").hash(toBeHashed.toByteArray())
        val token = arrayOf("apiKey", Base64.getEncoder().encodeToString(signature), timestamp, nonce).joinToString("_")
        val result = "HMAC-SHA512 $token"
        Assertions.assertThat(result).isEqualTo("HMAC-SHA512 apiKey_MzE5ZjQyNzg3ZTgyZGJhNmE3YTBiNjI5ODA5MjIzMzk2YzRhMTg1MmNlOWUwYzhiYTNiZmQ0MTkxY2NlMDg1YTVlMWM0Y2UwM2QzNzNlM2NhYWIxMzcxMTU5MTQxNTJkNzFhMmEwMmY3OGIwNTZmNjA0NTJkZDJlYzg2ZDE1MjU=_1592924470_353823db-c12b-44b2-b0dc-c4d813c74b24")
    }

    //TODO remove this test and create one that checks the token generation
//    @Test
//    fun `encoding hi`() {
//        val encodedString = Base64.getEncoder().encodeToString("hi".toByteArray()) //aGk=
//        val timestamp = 1592924470//Instant.now().epochSecond
//        val nonce = "353823db-c12b-44b2-b0dc-c4d813c74b24"//UUID.randomUUID().toString()
//        val toBeHashed = arrayOf(encodedString, "application/json", "http", timestamp, nonce).joinToString("_")
////        val signature = Base64.getEncoder().encodeToString(HMAC("secret").hash(toBeHashed.toByteArray()))
//        val signature = HMAC("secret").hash(toBeHashed.toByteArray())
//        Assertions.assertThat(String(signature)).isEqualTo("MzE5ZjQyNzg3ZTgyZGJhNmE3YTBiNjI5ODA5MjIzMzk2YzRhMTg1MmNlOWUwYzhiYTNiZmQ0MTkxY2NlMDg1YTVlMWM0Y2UwM2QzNzNlM2NhYWIxMzcxMTU5MTQxNTJkNzFhMmEwMmY3OGIwNTZmNjA0NTJkZDJlYzg2ZDE1MjU=")
//    }



}