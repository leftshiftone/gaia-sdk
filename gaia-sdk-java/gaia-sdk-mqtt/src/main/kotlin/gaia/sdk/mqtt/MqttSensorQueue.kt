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

import com.fasterxml.jackson.databind.ObjectMapper
import com.hivemq.client.mqtt.MqttGlobalPublishFilter.SUBSCRIBED
import com.hivemq.client.mqtt.MqttWebSocketConfig
import com.hivemq.client.mqtt.lifecycle.MqttClientAutoReconnect
import com.hivemq.client.mqtt.mqtt5.Mqtt5Client
import com.hivemq.client.mqtt.mqtt5.Mqtt5RxClient
import com.hivemq.client.mqtt.mqtt5.message.connect.Mqtt5Connect
import com.hivemq.client.mqtt.mqtt5.message.publish.Mqtt5Publish
import gaia.sdk.api.ISensorQueue
import gaia.sdk.mqtt.async.SdkThreadFactory
import gaia.sdk.mqtt.queue.*
import gaia.sdk.mqtt.queue.ConversationQueueType.*
import gaia.sdk.spi.QueueOptions
import io.reactivex.Completable
import io.reactivex.Flowable
import org.slf4j.LoggerFactory
import java.util.*
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.Executors.newFixedThreadPool
import java.util.concurrent.TimeUnit

class MqttSensorQueue(private val options: QueueOptions) : ISensorQueue {
    companion object {
        const val GAIA_ROOT_TOPIC = "gaia"
    }

    private val callbacks = ConcurrentHashMap<String, (QueuePayload<ByteArray>) -> Unit>()
    private val logger = LoggerFactory.getLogger(MqttSensorQueue::class.java)
    private val objectMapper = ObjectMapper()

    private val client = initClient()

    fun connect(): Completable {
        return client.connect(Mqtt5Connect.builder().cleanStart(false)
                .noSessionExpiry().keepAlive(10).build())
                .doOnSuccess { handle() }
                .ignoreElement()
    }

    private fun handle() {
        client.publishes(SUBSCRIBED)
                .onErrorResumeNext(Flowable.empty())
                .map { QueueMessage(it) }
                .subscribeOn(options.subscriptionScheduler)
                .subscribe({
                    if (callbacks.containsKey(it.getTopic())) {
                        val contentType = it.getContentType().orElse("application/json")
                        val payload = QueuePayload(contentType, it.getPayloadAsBytes())
                        callbacks[it.getTopic()]!!(payload)
                    }
                }) { it.printStackTrace() }
    }

    fun subscribe(type: IQueueType, header: QueueHeader, consumer: (QueuePayload<ByteArray>) -> Unit): Completable {
        return client.subscribeWith()
                .topicFilter(getTopic(type, header)).noLocal(true)
                .applySubscribe()
                .timeout(options.subscribeTimeout, TimeUnit.SECONDS)
                .doOnSuccess {
                    logger.info("Successfully subscribed")
                    callbacks[getTopic(type, header)] = consumer
                }
                .doOnError { logger.error("Unable to subscribe", it.cause) }
                .ignoreElement()
    }

    fun unsubscribe(type: IQueueType, header: QueueHeader): Completable {
        return client.unsubscribeWith()
                .topicFilter(getTopic(type, header))
                .applyUnsubscribe()
                .timeout(options.subscribeTimeout, TimeUnit.SECONDS)
                .doOnSuccess {
                    logger.info("Successfully unsubscribed")
                    callbacks.remove(getTopic(type, header))
                }
                .doOnError { logger.error("Unable to unsubscribe", it.cause) }
                .ignoreElement()
    }

    fun publish(type: IQueueType, header: QueueHeader, payload: QueuePayload<ByteArray>): Completable {
        val publish = Mqtt5Publish.builder()
                .topic(getTopic(type, header))
                .userProperties()
                .add("identityId", header.identityId.toString())
                .add("userId", UUID.randomUUID().toString())
                .add("deviceId", options.deviceId)
                .add("deviceInstanceId", options.deviceInstanceId)
                .add("channelId", header.channelId?.toString() ?: UUID.randomUUID().toString())
                .applyUserProperties()
                .contentType(payload.contentType)
                .payload(payload.content)
                .build()
        return client.publish(Flowable.just(publish)).ignoreElements()
    }

    private fun initClient(): Mqtt5RxClient {
        var clientBuilder = Mqtt5Client.builder()
                .identifier(options.deviceInstanceId)
                .serverHost(options.host)
                .serverPort(options.port)
                .automaticReconnect(MqttClientAutoReconnect.builder().build())

        if (!options.username.isNullOrEmpty() && !options.password.isNullOrEmpty()) {
            clientBuilder = clientBuilder.simpleAuth()
                    .username(options.username!!)
                    .password(options.password!!.toByteArray())
                    .applySimpleAuth()
        }

        if (options.isSsl) {
            clientBuilder = clientBuilder
                    .sslWithDefaultConfig()
        }

        if (options.isWebsocket) {
            clientBuilder = clientBuilder
                    .webSocketConfig(MqttWebSocketConfig.builder().serverPath(options.websocketPath).build())
        }

        return clientBuilder
                .executorConfig()
                .nettyExecutor(newFixedThreadPool(options.clientThreads, SdkThreadFactory.INSTANCE))
                .applicationScheduler(options.clientScheduler)
                .nettyThreads(options.clientThreads)
                .applyExecutorConfig()
                .addConnectedListener { logger.info("Connected to {}", it.clientConfig.serverAddress) }
                .addDisconnectedListener { logger.error("Error while connecting to mqtt broker", it.cause) }
                .buildRx()
    }

    private fun getTopic(type: IQueueType, header: QueueHeader): String {
        if (type is ConversationQueueType) {
            val deviceInstanceId = options.deviceInstanceId
            val channelId = header.channelId
            return when (type) {
                NOTIFICATION -> "$GAIA_ROOT_TOPIC/conversation/$deviceInstanceId/$channelId/notification"
                INTERACTION -> "$GAIA_ROOT_TOPIC/conversation/$deviceInstanceId/$channelId/interaction"
                CONTEXT -> "$GAIA_ROOT_TOPIC/conversation/$deviceInstanceId/$channelId/context"
                LOGGING -> "$GAIA_ROOT_TOPIC/conversation/$deviceInstanceId/$channelId/logging"
            }
        }
        throw IllegalArgumentException("cannot handle queue type $type")
    }

    fun subscribeConvContext(header: QueueHeader, consumer: (QueuePayload<ConvContext>) -> Unit): Completable {
        return subscribe(CONTEXT, header) {
            consumer(QueuePayload(it.contentType, objectMapper.readValue(it.content, ConvContext::class.java)))
        }
    }

    fun subscribeConvLogging(header: QueueHeader, consumer: (QueuePayload<ConvLogging>) -> Unit): Completable {
        return subscribe(CONTEXT, header) {
            consumer(QueuePayload(it.contentType, objectMapper.readValue(it.content, ConvLogging::class.java)))
        }
    }

    fun subscribeConvNotification(header: QueueHeader, consumer: (QueuePayload<ConvNotification>) -> Unit): Completable {
        return subscribe(CONTEXT, header) {
            consumer(QueuePayload(it.contentType, objectMapper.readValue(it.content, ConvNotification::class.java)))
        }
    }

    fun subscribeConvInteraction(header: QueueHeader, consumer: (QueuePayload<ConvInteraction>) -> Unit): Completable {
        return subscribe(CONTEXT, header) {
            consumer(QueuePayload(it.contentType, objectMapper.readValue(it.content, ConvInteraction::class.java)))
        }
    }

    fun publishConvInteraction(header: QueueHeader, payload: ConvInteraction): Completable {
        val content = QueuePayload("application/json", objectMapper.writeValueAsBytes(payload.content))
        return publish(INTERACTION, header, content)
    }

}



