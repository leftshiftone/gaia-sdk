package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * The top level query type
 */
class Query: Type() {

    /**
     * Container element for all introspect sensor fields
     */
    fun introspect(config: Introspection.() -> Unit) = 
        add { "introspect{ " + Introspection().apply(config).render(it) + "}"}


    /**
     * Container element for all retrieve sensor fields
     */
    fun retrieve(config: Retrieval.() -> Unit) = 
        add { "retrieve{ " + Retrieval().apply(config).render(it) + "}"}

}

