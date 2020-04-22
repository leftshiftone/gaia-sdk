package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class Interaction: Type() {

    fun onConversed(config: OnConversed.() -> Unit) = 
        add { "onConversed{ " + OnConversed().apply(config).render(it) + "}"}

}

