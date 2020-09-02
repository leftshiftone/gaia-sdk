package gaia.sdk.api

import gaia.sdk.api.queue.*
import io.reactivex.Completable

interface ISensorQueue {
    fun connectToQueue(): Completable
    fun subscribe(type: IQueueType, header: QueueHeader, consumer: (QueuePayload<ByteArray>) -> Unit): Completable
    fun unsubscribe(type: IQueueType, header: QueueHeader): Completable
    fun publish(type: IQueueType, header: QueueHeader, payload: QueuePayload<ByteArray>): Completable
    fun subscribeConvContext(header: QueueHeader, consumer: (QueuePayload<ConvContext>) -> Unit): Completable
    fun subscribeConvLogging(header: QueueHeader, consumer: (QueuePayload<ConvLogging>) -> Unit): Completable
    fun subscribeConvNotification(header: QueueHeader, consumer: (QueuePayload<ConvNotification>) -> Unit): Completable
    fun subscribeConvInteraction(header: QueueHeader, consumer: (QueuePayload<ConvInteraction>) -> Unit): Completable
    fun publishConvInteraction(header: QueueHeader, payload: ConvInteraction): Completable
}
