package gaia.sdk.spi

import gaia.sdk.api.support.HMAC

class ClientOptions(val apiKey: String, val secret: HMAC)
