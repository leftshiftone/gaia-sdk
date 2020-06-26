package gaia.sdk

import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter

class GaiaClientBuilder (private val transporter: ITransporter) {

    lateinit var credentials: GaiaCredentials
    var contentType: String = "application/json"

    fun withCredentials(credentials: GaiaCredentials): GaiaClientBuilder {
        this.credentials=credentials
        return this
    }

    fun withContentType(contentType: String) : GaiaClientBuilder {
        this.contentType = contentType
        return this
    }

    fun build(): GaiaClient {
        val options = ClientOptions(credentials,contentType)
        return GaiaClient(options, transporter)
    }

}

interface GaiaCredentials
class HMACCredentials(val apiKey: String, val apiSecret: String) : GaiaCredentials
class JWTCredentials(val token: String) : GaiaCredentials

