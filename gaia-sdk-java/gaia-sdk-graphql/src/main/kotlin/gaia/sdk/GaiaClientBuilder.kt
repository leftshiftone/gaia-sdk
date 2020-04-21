package gaia.sdk

import gaia.sdk.api.support.HMAC
import gaia.sdk.api.transmitter.ClientOptions
import gaia.sdk.api.transmitter.ITransporter

class GaiaClientBuilder (private val transporter: ITransporter) {

    lateinit var apiKey: String;
    lateinit var secret: String;
    lateinit var bearer: String;

    fun withApiKey(apiKey: String): GaiaClientBuilder {
        this.apiKey = apiKey
        return this
    }

    fun withSecret(secret: String): GaiaClientBuilder {
        this.secret = secret
        return this
    }

    fun withBearer(bearer: String): GaiaClientBuilder {
        this.bearer = bearer
        return this
    }

    fun build(): GaiaClient {
        val options = ClientOptions(apiKey, HMAC(secret))
        return GaiaClient(options, transporter)
    }

}
