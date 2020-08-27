package gaia.sdk

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter

//Class generated from template src/main/resources/template/java/ClientBuilderTemplate.vm

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
        val options = ClientOptions(credentials, contentType)
        return GaiaClient(options, transporter)
    }


}

interface GaiaCredentials
class HMACCredentials(val apiKey: String, val apiSecret: String) : GaiaCredentials
class JWTCredentials(val token: String) : GaiaCredentials

class UsernamePasswordCredentials(val username: String, val password: String)
data class LoginResponse @JsonCreator constructor(
        @JsonProperty("username") val username: String,
        @JsonProperty("accessToken") val accessToken: String
)