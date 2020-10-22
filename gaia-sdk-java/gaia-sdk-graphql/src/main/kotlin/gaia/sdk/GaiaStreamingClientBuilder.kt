package gaia.sdk

import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.IStreamTransporter
import gaia.sdk.spi.ITransporter

class GaiaStreamingClientBuilder (private val transporter: IStreamTransporter) {

    lateinit var credentials: GaiaCredentials
    var contentType: String = "application/json"

    fun withCredentials(credentials: GaiaCredentials): GaiaStreamingClientBuilder {
        this.credentials=credentials
        return this
    }

    fun withContentType(contentType: String) : GaiaStreamingClientBuilder {
        this.contentType = contentType
        return this
    }

    fun build(): GaiaStreamClient {
        val options = ClientOptions(credentials, contentType)
        return GaiaStreamClient(options, transporter)
    }


}
