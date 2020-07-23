/*
 * Copyright (c) 2016-2020, Leftshift One
 * __________________
 * [2020] Leftshift One
 * All Rights Reserved.
 * NOTICE:  All information contained herein is, and remains
 * the property of Leftshift One and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Leftshift One
 * and its suppliers and may be covered by Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Leftshift One.
 */

package gaia.sdk.mqtt

import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.mqtt.queue.ConvInteraction
import gaia.sdk.mqtt.queue.ConversationQueueType.INTERACTION
import gaia.sdk.mqtt.queue.QueueHeader
import gaia.sdk.spi.QueueOptions
import java.util.*
import kotlin.collections.HashMap

internal class MqttSensorQueueTest {

    private val objectMapper = ObjectMapper()

    // @Test
    fun test() {
        val queue = MqttSensorQueue(QueueOptions("mqtt.beta.gaia.leftshift.one", 443))
        val header = QueueHeader(UUID.fromString("4a87c137-3894-4580-ae20-8a4f621b75fd"), UUID.randomUUID())

        queue.connect()
                .andThen(queue.subscribe(INTERACTION, header) {
                    val type = object : TypeReference<ArrayList<HashMap<String, Any>>>() {}
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
