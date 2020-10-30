package gaia.sdk.http

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.GaiaStreamClient
import gaia.sdk.HMACCredentials
import gaia.sdk.JWTCredentials
import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter
import io.netty.buffer.Unpooled
import io.reactivex.Flowable
import org.reactivestreams.Publisher
import org.slf4j.LoggerFactory
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.netty.http.client.HttpClient
import java.io.ByteArrayOutputStream
import java.io.File
import java.net.URLEncoder
import java.time.Instant
import java.util.*

class HttpTransporter(private val baseUrl: String, private val httpClient: HttpClient) : ITransporter {

    private val jsonparser = ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
    private val log = LoggerFactory.getLogger(HttpTransporter::class.java)

    override fun <T> transport(options: ClientOptions, payload: Any, type: Class<T>, apiPath: String, queryParameters: Map<String, Any>): Publisher<T> {
        return this.transport(options, payload, type, buildUri(apiPath, queryParameters))
    }

    override fun <T> transport(options: ClientOptions, payload: Any, type: Class<T>): Publisher<T> {
        return this.transport(options,payload, type, "")
    }

    override fun <T> transport(options: ClientOptions, payload: Any, type: Class<T>, apiPath: String): Publisher<T> {
        val bytes = convertToByteArray(payload)
        return this.transport(options, bytes, apiPath, buildAuthorizationHeader(options, bytes))
                .byteArrayCast(jsonparser, type)
    }

    fun transport(options: ClientOptions, payload: ByteArray, apiPath: String, authorization: String): Publisher<ByteArray> {

        return httpClient
                .headers {
                    it.add("Content-Type", options.contentType)
                    it.add("Authorization", authorization)
                }

                .followRedirect(true)
                .post()
                .uri("${baseUrl}${apiPath}")
                .send(Mono.just(Unpooled.copiedBuffer(payload)))
                .responseConnection { t, u ->
                    u
                            .inbound()
                            .receive()
                            .asByteArray()
                            .buffer()
                            .map { list ->
                                val bos = ByteArrayOutputStream()
                                list.forEach(bos::write)
                                bos.toByteArray()
                            }
                            .switchIfEmpty(
                                    Flux.just(t.status())
                                            .flatMap {
                                                if (it.code() >= 400) {
                                                    val msg = "Error with status code ${t.status().code()} (${t.status().reasonPhrase()}) and no payload"
                                                    Flux.error(HttpTransportException(msg))
                                                } else {
                                                    Flux.empty<ByteArray>()
                                                }
                                            }
                            )
                            .map { byteArray ->
                                if (t.status().code() >= 400) {
                                    val msg = "Error with status code ${t.status().code()} (${t.status().reasonPhrase()}) and payload: ${String(byteArray)}"
                                    throw HttpTransportException(msg)
                                }
                                byteArray
                            }
                }
    }


    private fun buildAuthorizationHeader(options: ClientOptions, payload: ByteArray): String {
        when (options.credentials) {
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

    private fun buildUri(apiPath: String, queryParameters: Map<String, Any> = mapOf()): String {
        if (queryParameters.isEmpty()) {
            log.debug("Request does not contain query parameters")
            return apiPath
        }
        val queryParams = queryParameters
                .entries
                .map { p -> "${urlEncode(p.key)}=${urlEncode(p.value)}" }
                .reduce({ p1, p2 -> "$p1&$p2" })
        val builtUri = apiPath + "?${queryParams}"
        log.debug("Built uri with query parameters: $builtUri")
        return builtUri
    }

    private fun convertToByteArray(payload: Any): ByteArray {
        return when (payload) {
            is ByteArray -> payload
            else -> jsonparser.writeValueAsBytes(payload)
        }
    }

    private fun urlEncode(string: Any) = URLEncoder.encode(string.toString(), "UTF-8")

}

fun <T> Publisher<ByteArray>.byteArrayCast(jsonParser: ObjectMapper, type: Class<T>): Flowable<T> = Flowable.fromPublisher(this)
        .map { byteArray ->
            when (type) {
                File::class.java -> {
                    val file = File.createTempFile("${System.currentTimeMillis()}-", "-gaia-sdk-download")
                    file.writeBytes(byteArray)
                    file
                }
                else -> jsonParser.readValue(byteArray, type)
            }
        }.cast(type)
