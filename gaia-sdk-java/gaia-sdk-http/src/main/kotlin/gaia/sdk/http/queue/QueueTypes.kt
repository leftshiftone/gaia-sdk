package gaia.sdk.http.queue

interface IQueueType {
    fun getName():String
}

enum class ConversationQueueType : IQueueType {
    INTERACTION,
    NOTIFICATION,
    CONTEXT,
    LOGGING;

    override fun getName() = this.name
}

enum class DataTypes : IQueueType {
    DATA;

    override fun getName() = this.name
}
