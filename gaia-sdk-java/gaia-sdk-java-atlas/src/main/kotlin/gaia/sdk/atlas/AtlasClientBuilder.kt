package gaia.sdk.atlas

import gaia.sdk.api.ClientOptions
import gaia.sdk.api.ITransporter
import gaia.sdk.support.HMAC
import gaia.sdk.transport.HttpTransport
import reactor.netty.http.client.HttpClient

// AUTOGENERATED CLASS. DO NOT MODIFY.
class AtlasClientBuilder private constructor(private val transporter: ITransporter) {

    lateinit var apiKey: String;
    lateinit var secret: String;

    companion object {
        @JvmStatic
        @JvmOverloads
        fun http(url: String, client: HttpClient = HttpClient.create()): AtlasClientBuilder {
            return AtlasClientBuilder(HttpTransport(url, client))
        }
        @JvmStatic
        fun custom(transporter: ITransporter): AtlasClientBuilder {
            return AtlasClientBuilder(transporter)
        }
    }

    fun withApiKey(key: String): AtlasClientBuilder {
        this.apiKey = key
        return this
    }

    fun withSecret(secret: String): AtlasClientBuilder {
        this.secret = secret
        return this
    }

    fun build(): AtlasClient {
        val options = ClientOptions(apiKey, HMAC(secret))
        return AtlasClient(options, transporter)
    }

}
