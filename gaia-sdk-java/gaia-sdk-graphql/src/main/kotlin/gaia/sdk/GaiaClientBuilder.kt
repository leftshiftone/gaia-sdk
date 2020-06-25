package gaia.sdk

import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter

class GaiaClientBuilder (private val transporter: ITransporter) {

    lateinit var credentials: GaiaCredentials

    fun withCredentials(credentials: GaiaCredentials): GaiaClientBuilder {
        this.credentials=credentials
        return this
    }

    fun build(): GaiaClient {
        val options = ClientOptions(credentials)
        return GaiaClient(options, transporter)
    }

}

interface GaiaCredentials
class HMACCredentials(val apiKey: String, val apiSecret: String) : GaiaCredentials
class JWTCredentials(val token: String) : GaiaCredentials

