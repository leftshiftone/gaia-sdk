package gaia.sdk.http

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
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
import java.nio.ByteBuffer.allocate
import java.util.*
import java.util.function.BiFunction

class HttpTransport(private val url: String, private val httpClient: HttpClient) : ITransporter {

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
            // it.add("Accept-Encoding", "gzip")
            it.add("Authorization", hmacHeader(options, bytes))
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
                        val msg = "Error with status code ${tuple.t1.code()} (${tuple.t1.reasonPhrase()} and payload ${String(tuple.t2)}"
                        return@flatMap Flux.error<RuntimeException>(HttpTransportException(msg))
                    }
                    return@flatMap Flux.just(jsonparser.readValue(tuple.t2, type))
                }.cast(type)
    }

    fun ByteArray.base64() = Base64.getEncoder().encodeToString(this)

    fun zip(): BiFunction<HttpResponseStatus, ByteArray, Tuple2<HttpResponseStatus, ByteArray>> {
        return BiFunction { a, b -> Tuples.of(a, b) }
    }

    /**
     * Authorization: "HMAC-SHA512 " + API_KEY + "," +
     * base64(hmac-sha512( content, content_type, sensor_type, timestamp, nonce )) + "," + timestamp + "," + nonce
     */
    private fun hmacHeader(options: ClientOptions, payload: ByteArray):String {
        val timestamp = System.currentTimeMillis() / 1000
        val nonce:String = UUID.randomUUID().toString()
        val contentType = options.contentType.toByteArray()
        val sensorType = "http".toByteArray()

        val buffer = allocate(payload.size + contentType.size + sensorType.size + 8 + nonce.toByteArray().size)
        buffer.put(payload).put(contentType).put(sensorType).putLong(timestamp).put(nonce.toByteArray())

        val content = options.secret.hash(buffer.array()).base64()
       return "HMAC-SHA512 " + options.apiKey + "_" + content + "_" + timestamp + "_" + nonce
    }

}
