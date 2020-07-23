package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class Notification: Type() {

    fun onCreated(config: OnCreated.() -> Unit) = 
        add { "onCreated{ " + OnCreated().apply(config).render(it) + "}"}


    fun onUpdated(config: OnUpdated.() -> Unit) = 
        add { "onUpdated{ " + OnUpdated().apply(config).render(it) + "}"}


    fun onDeleted(config: OnDeleted.() -> Unit) = 
        add { "onDeleted{ " + OnDeleted().apply(config).render(it) + "}"}

}

