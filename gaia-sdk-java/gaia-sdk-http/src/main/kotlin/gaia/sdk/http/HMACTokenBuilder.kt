package gaia.sdk.http

import gaia.sdk.HMACCredentials
import gaia.sdk.client.HMAC
import gaia.sdk.spi.ClientOptions
import java.util.*

class HMACTokenBuilder {

    companion object {
        const val HTTP_SENSOR_TYPE = "http"
    }

    lateinit var clientOptions: ClientOptions
    var timestamp: Long = 0
    lateinit var nonce: String
    lateinit var payload: String


    fun withPayload(payload: String): HMACTokenBuilder {
        this.payload=payload
        return this
    }

    fun withClientOptions(clientOptions: ClientOptions): HMACTokenBuilder {
        this.clientOptions=clientOptions
        return this
    }

    fun withTimestamp(timestamp: Long): HMACTokenBuilder {
        this.timestamp=timestamp
        return this
    }

    fun withNonce(nonce: String): HMACTokenBuilder {
        this.nonce=nonce
        return this
    }


    /**
     * Authorization: "HMAC-SHA512 " + API_KEY + "_" +
     * base64(hmac-sha512( content, content_type, sensor_type, timestamp, nonce )) + "_" + timestamp + "_" + nonce
     */
    fun build(): String {
        val sep = "_"
        val headerScheme = "HMAC-SHA512"
        val sensorType = HTTP_SENSOR_TYPE
        val payloadAsByteArray = payload.toByteArray()
        val credentials = clientOptions.credentials as HMACCredentials

        val toBeHashed = arrayOf(Base64.getEncoder().encodeToString(payloadAsByteArray), clientOptions.contentType, sensorType, timestamp, nonce).joinToString(sep)
        val signature = Base64.getEncoder().encodeToString(HMAC(credentials.apiSecret).hash(toBeHashed.toByteArray()))
        val token = arrayOf(credentials.apiKey, signature, timestamp, nonce).joinToString(sep)
        return "$headerScheme $token"
    }




}
