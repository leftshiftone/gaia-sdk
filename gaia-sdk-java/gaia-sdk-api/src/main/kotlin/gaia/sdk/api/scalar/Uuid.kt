package gaia.sdk.api.scalar

import java.util.*

class Uuid(val uuid: UUID) {

    companion object {
        fun random() = Uuid(UUID.randomUUID())
        fun fromString(uuid: String) = Uuid(UUID.fromString(uuid))
        fun from(uuid: Any?) = Uuid(UUID.fromString(uuid.toString()))
    }

}
