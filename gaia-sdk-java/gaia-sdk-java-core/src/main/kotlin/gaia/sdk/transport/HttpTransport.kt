package gaia.sdk.transport

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.api.ClientOptions
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
import java.util.*
import java.util.function.BiFunction


class HttpTransport(val url: String, val httpClient: HttpClient) : gaia.sdk.api.ITransporter {
    companion object {
        private val log = LoggerFactory.getLogger(this::class.java.enclosingClass)
    }

    val jsonparser = ObjectMapper()

    init {
        jsonparser.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
    }

    override fun <T> transport(options: ClientOptions, type: Class<T>, payload: ByteArray): Publisher<T> {
        if (log.isTraceEnabled) {
            log.debug("Payload to send: '${String(payload)}'")
        }

        return httpClient.headers {
            it.add("Content-Type", "application/json")
            it.add("X-GAIA-APIKEY", options.apiKey)
            it.add("X-GAIA-SIGNATURE", options.secret.hash(payload.base64()))
        }
                .followRedirect(true)
                .post()
                .uri(url)
                .send(Mono.just(Unpooled.copiedBuffer(payload)))
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
                        val msg = "Error with status code ${tuple.t1.code()} (${tuple.t1.reasonPhrase()} and payload ${String(tuple.t2)}"
                        return@flatMap Flux.error<RuntimeException>(HttpTransportException(msg))
                    }
                    return@flatMap Flux.just(jsonparser.readValue(tuple.t2, type))
                }.cast(type)
    }

    fun ByteArray.base64(): String {
        return Base64.getEncoder().encodeToString(this)
    }

    fun zip(): BiFunction<HttpResponseStatus, ByteArray, Tuple2<HttpResponseStatus, ByteArray>> {
        return BiFunction { a, b -> Tuples.of(a, b) }
    }

}
