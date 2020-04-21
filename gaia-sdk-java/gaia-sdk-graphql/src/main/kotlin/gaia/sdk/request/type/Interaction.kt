package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class Interaction: Type() {

    fun onConversed(config: OnConversed.() -> Unit) = 
        add { "onConversed{ " + OnConversed().apply(config).render(it) + "}"}

}

