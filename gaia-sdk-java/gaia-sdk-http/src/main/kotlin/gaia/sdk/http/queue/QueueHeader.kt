package gaia.sdk.http.queue

import java.util.*

data class QueueHeader(val identityId: String,
                       val userId: UUID?,
                       val channelId: UUID?)
