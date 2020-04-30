package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class Retrieval: Type() {

    /**
     * Container element which collects all information static data
     */
    fun knowledge(config: Knowledge.() -> Unit) = 
        add { "knowledge{ " + Knowledge().apply(config).render(it) + "}"}


    /**
     * Container element which collects all information about runtime data
     */
    fun experience(config: Experience.() -> Unit) = 
        add { "experience{ " + Experience().apply(config).render(it) + "}"}

}

