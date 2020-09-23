package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * Impulse which indicates the result of a create api key impulse
 */
class CreatedApiKeyImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    fun data(config: ApiKey.() -> Unit) = 
        add { "data{ " + ApiKey().apply(config).render(it) + "}"}

}

