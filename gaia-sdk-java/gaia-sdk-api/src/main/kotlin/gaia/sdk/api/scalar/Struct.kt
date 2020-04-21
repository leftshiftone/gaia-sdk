package gaia.sdk.api.scalar

import java.util.*

class Struct(map: Map<String, Any> = emptyMap()) : HashMap<String, Any>(map) {
    companion object {
        fun from(uuid: Any?) = Struct()
    }
}
