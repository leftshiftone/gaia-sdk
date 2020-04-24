package gaia.sdk.spi

import gaia.sdk.client.HMAC

class ClientOptions(val apiKey: String, val secret: HMAC)
