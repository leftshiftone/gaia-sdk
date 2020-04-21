package gaia.sdk.api.scalar

import java.util.*

class Timestamp(val uuid: UUID) {

    companion object {
        fun random() = Timestamp(UUID.randomUUID())
        fun fromString(uuid: String) = Timestamp(UUID.fromString(uuid))
        fun from(uuid: Any?) = Timestamp(UUID.fromString(uuid.toString()))
    }

}
