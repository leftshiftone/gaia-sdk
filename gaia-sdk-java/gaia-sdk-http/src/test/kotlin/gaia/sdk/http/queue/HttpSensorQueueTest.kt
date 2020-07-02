package gaia.sdk.http.queue

import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.mqtt.MqttSensorQueue
import gaia.sdk.mqtt.queue.ConvInteraction
import gaia.sdk.mqtt.queue.ConversationQueueType.INTERACTION
import gaia.sdk.mqtt.queue.QueueHeader
import gaia.sdk.spi.QueueOptions
import java.util.*
import kotlin.collections.HashMap

class HttpSensorQueueTest {

    private val objectMapper = ObjectMapper()

    // @Test
    fun test() {
        val queue = MqttSensorQueue(QueueOptions("mqtt.beta.gaia.leftshift.one", 443))
        val header = QueueHeader(UUID.fromString("4a87c137-3894-4580-ae20-8a4f621b75fd"), UUID.randomUUID())

        queue.connect()
                .andThen(queue.subscribe(INTERACTION, header) {
                    val type = object:TypeReference<ArrayList<HashMap<String, Any>>>() {}
                    val content = objectMapper.readValue(it.content, type)
                    println(content)
                })
                .andThen(queue.publishConvInteraction(header, ConvInteraction(mapOf("type" to "reception", "payload" to "", "attributes" to HashMap<String, Any>()))))
                .subscribe({}) {
                    it.printStackTrace()
                }

        Thread.sleep(100000)
    }

}
