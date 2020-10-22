package gaia.sdk.spi

import gaia.sdk.GaiaCredentials

class ClientOptions(val credentials: GaiaCredentials, val contentType: String = "application/json", val requestParameters: Map<String,Any>?){

    constructor(credentials: GaiaCredentials, contentType: String): this(credentials, contentType, null)
    constructor(credentials: GaiaCredentials): this(credentials, "application/json", null)

    fun withContentType(contentType: String): ClientOptions{
        return ClientOptions(this.credentials, contentType, requestParameters)
    }

    fun withRequestParameters(requestParameters: Map<String, Any>?): ClientOptions{
        return ClientOptions(this.credentials, this.contentType, requestParameters)
    }
}
