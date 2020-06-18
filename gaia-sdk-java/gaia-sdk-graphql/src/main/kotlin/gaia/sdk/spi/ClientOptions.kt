package gaia.sdk.spi

import gaia.sdk.GaiaCredentials

class ClientOptions(val credentials: GaiaCredentials, val contentType: String = "application/json")
