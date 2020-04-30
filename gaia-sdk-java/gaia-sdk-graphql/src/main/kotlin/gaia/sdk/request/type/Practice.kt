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
 * This type contains all practice sensor impulses which are used to support
 * practice in gaia.
 */
class Practice: Type() {

    /**
     * Stream practice preparation impulse used to transfer a skill to gaia.
     *     This perception impulse do not invoke the data transmission but establishes
     *     a connection to the streaming api.
     */
    fun prepare(impulse : StreamImpulse, config: StreamingImpulse.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "prepare(impulse:$$name1){" + StreamingImpulse().apply(config).render(it) + "}"
    }
}

