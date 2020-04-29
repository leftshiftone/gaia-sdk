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

/**
 * This type contains all preservation sensor impulses which are used to support
 * read/write/delete memory functions in gaia.
 */
class Preservation: Type() {

    fun create(config: CreateKnowledge.() -> Unit) = 
        add { "create{ " + CreateKnowledge().apply(config).render(it) + "}"}


    fun update(config: UpdateKnowledge.() -> Unit) = 
        add { "update{ " + UpdateKnowledge().apply(config).render(it) + "}"}


    fun delete(config: DeleteKnowledge.() -> Unit) = 
        add { "delete{ " + DeleteKnowledge().apply(config).render(it) + "}"}

}

