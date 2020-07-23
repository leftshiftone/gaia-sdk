package gaia.sdk.spi

import io.reactivex.schedulers.Schedulers
import java.util.*

data class QueueOptions(val host: String,
                        val port: Int,
                        val clientThreads: Int = 1) {
    var isWebsocket: Boolean = true
    var isSsl: Boolean = true
    var websocketPath: String = "mqtt"
    var username: String? = null
    var password: String? = null

    var deviceId = UUID.randomUUID().toString()
    var deviceInstanceId = UUID.randomUUID().toString()
    var subscribeTimeout: Long = 10
    var subscriptionScheduler = Schedulers.io()
    var clientScheduler = Schedulers.io()

}
