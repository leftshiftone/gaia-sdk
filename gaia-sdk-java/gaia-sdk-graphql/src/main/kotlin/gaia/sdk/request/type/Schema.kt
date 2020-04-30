package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class Schema: Type() {

    fun query(config: Query.() -> Unit) = 
        add { "query{ " + Query().apply(config).render(it) + "}"}


    fun mutation(config: Mutation.() -> Unit) = 
        add { "mutation{ " + Mutation().apply(config).render(it) + "}"}


    fun subscription(config: Subscription.() -> Unit) = 
        add { "subscription{ " + Subscription().apply(config).render(it) + "}"}

}

