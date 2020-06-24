package gaia.sdk.http.queue

import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.http.HttpSensorQueue
import gaia.sdk.spi.QueueOptions
import java.util.*

class HttpSensorQueueTest {

    private val objectMapper = ObjectMapper()

    // @Test
    fun test() {
        val queue = HttpSensorQueue(QueueOptions("mqtt.beta.gaia.leftshift.one", 443))

        val header = QueueHeader("1337", null, UUID.randomUUID())

        queue.connect()
                .andThen(queue.subscribe(ConversationQueueType.INTERACTION, header) {
                    val content = objectMapper.readValue(it.content, Map::class.java)
                    println(content)
                })
                .andThen(queue.publishConvInteraction(header, ConvInteraction(mapOf("type" to "reception"))))
                .subscribe {
                    println("----")
                }

        Thread.sleep(10000)
    }

}
