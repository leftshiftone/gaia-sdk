package gaia.sdk.spi

import gaia.sdk.GaiaCredentials

class ClientOptions(val credentials: GaiaCredentials, val contentType: String = "application/json"){

    constructor(credentials: GaiaCredentials): this(credentials, "application/json")

    fun withContentType(contentType: String): ClientOptions{
        return ClientOptions(this.credentials, contentType)
    }

}
