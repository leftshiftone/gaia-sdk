package gaia.sdk.http

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.HMACCredentials
import gaia.sdk.JWTCredentials
import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter
import io.netty.buffer.Unpooled
import io.netty.handler.codec.http.HttpResponseStatus
import org.reactivestreams.Publisher
import org.slf4j.LoggerFactory
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.netty.http.client.HttpClient
import reactor.util.function.Tuple2
import reactor.util.function.Tuples
import java.io.ByteArrayOutputStream
import java.time.Instant
import java.util.*
import java.util.function.BiFunction

class HttpTransporter(private val url: String, private val httpClient: HttpClient) : ITransporter {

    companion object {
        private val log = LoggerFactory.getLogger(this::class.java.enclosingClass)
    }

    private val jsonparser = ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)

    override fun <T> transport(options: ClientOptions, type: Class<T>, payload: Map<String, Any>): Publisher<T> {
        val bytes = jsonparser.writeValueAsBytes(payload)
        if (log.isTraceEnabled) {
            log.debug("Payload to send: '${String(bytes)}'")
        }

        return httpClient.headers {
            it.add("Content-Type", options.contentType)
            it.add("Authorization", buildAuthorizationHeader(options, String(bytes)))
        }
                .followRedirect(true)
                .post()
                .uri(url)
                .send(Mono.just(Unpooled.copiedBuffer(bytes)))
                .responseConnection { t, u ->
                    if (t.status().code() >= 400) {
                        val tuple = Tuples.of(t.status(), ByteArray(0))
                        return@responseConnection Flux.just(tuple)
                    }
                    val publisher1: Flux<HttpResponseStatus> = Flux.just(t.status())
                    val publisher2: Flux<ByteArray> = u.inbound().receive().asByteArray().buffer().map { list ->
                        val bos = ByteArrayOutputStream()
                        list.forEach(bos::write)
                        bos.toByteArray()
                    }

                    publisher1.zipWith(publisher2, this.zip())
                }
                .flatMap { tuple ->
                    if (tuple.t1.code() >= 400) {
                        val msg = "Error with status code ${tuple.t1.code()} (${tuple.t1.reasonPhrase()} and payload ${String(tuple.t2)})"
                        return@flatMap Flux.error<RuntimeException>(HttpTransportException(msg))
                    }
                    return@flatMap Flux.just(jsonparser.readValue(tuple.t2, type))
                }.cast(type)
    }

    fun zip(): BiFunction<HttpResponseStatus, ByteArray, Tuple2<HttpResponseStatus, ByteArray>> {
        return BiFunction { a, b -> Tuples.of(a, b) }
    }

    private fun buildAuthorizationHeader(options: ClientOptions, payload: String):String {
        when(options.credentials){
            is HMACCredentials -> return HMACTokenBuilder()
                    .withTimestamp(Instant.now().epochSecond)
                    .withPayload(payload)
                    .withClientOptions(options)
                    .withNonce(UUID.randomUUID().toString())
                    .build()
            is JWTCredentials -> return "Bearer ${(options.credentials as JWTCredentials).token}"
            else -> throw IllegalArgumentException("Credentials of type ${options.credentials.javaClass} not allowed")
        }
    }

}
