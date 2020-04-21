package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * the top level subscription type
 */
class Subscription: Type() {

    fun interact(config: Interaction.() -> Unit) = 
        add { "interact{ " + Interaction().apply(config).render(it) + "}"}


    fun notify(config: Notification.() -> Unit) = 
        add { "notify{ " + Notification().apply(config).render(it) + "}"}


    /**
     * Container element for all introspect sensor fields
     */
    fun introspect(config: Introspection.() -> Unit) = 
        add { "introspect{ " + Introspection().apply(config).render(it) + "}"}

}

