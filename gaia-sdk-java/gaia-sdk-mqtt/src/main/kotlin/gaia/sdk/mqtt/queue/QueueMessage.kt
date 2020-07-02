package gaia.sdk.mqtt.queue

import com.hivemq.client.mqtt.mqtt5.message.publish.Mqtt5Publish

class QueueMessage(private val message: Mqtt5Publish) {

    fun getResponseTopic() = message.responseTopic.map { it.toString() }
    fun getPayloadAsBytes() = message.payloadAsBytes
    fun getQos(): Int = message.qos.code

    fun getUserProperties(): Map<String, String> {
        val userProperties = HashMap<String, String>()
        message.userProperties.asList().forEach {
            userProperties.put(it.name.toString(), it.value.toString())
        }
        return userProperties
    }

    fun getContentType() = message.contentType.map { it.toString() }
    fun isRetain() = message.isRetain
    fun getMessageExpiryInterval() = message.messageExpiryInterval
    fun getPayload() = message.payload
    fun getCorrelationData() = message.correlationData
    fun getTopic() = message.topic.toString()
}
