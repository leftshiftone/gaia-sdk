package gaia.sdk.mqtt.queue

data class QueuePayload<T>(val contentType: String, val content: T)

data class ConvContext(val context: Map<String, Any>)
data class ConvLogging(val severity: String, val message: String)
data class ConvNotification(val notifications: List<Map<String, Any>>)
data class ConvInteraction(val content: Map<String, Any>)
