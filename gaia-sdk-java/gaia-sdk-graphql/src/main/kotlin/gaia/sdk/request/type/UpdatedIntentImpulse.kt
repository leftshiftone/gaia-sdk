package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
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
    fun intent(config: Intent.() -> Unit) = 
        add { "intent{ " + Intent().apply(config).render(it) + "}"}

}

