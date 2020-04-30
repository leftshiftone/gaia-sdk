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
 * Impulse which indicates the resulf of a update intent impulse
 */
class UpdatedIntentImpulse: Type() {

    fun id() { 
        add {"id" } 
    }

    /**
     * the intent instance
     */
    fun intents(config: Intent.() -> Unit) = 
        add { "intents{ " + Intent().apply(config).render(it) + "}"}

}

