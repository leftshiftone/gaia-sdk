package gaia.sdk.http

import gaia.sdk.HMACCredentials
import gaia.sdk.JWTCredentials
import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter
import io.netty.buffer.Unpooled
import org.reactivestreams.Publisher
import org.slf4j.LoggerFactory
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.netty.http.client.HttpClient
import java.io.ByteArrayOutputStream
import java.time.Instant
import java.util.*

class HttpTransporter(private val baseUrl: String, private val httpClient: HttpClient) : ITransporter {
//TODO APG use logger
    companion object {
        private val log = LoggerFactory.getLogger(this::class.java.enclosingClass)
    }

    override fun transport(options: ClientOptions, payload:ByteArray, apiPath: String): Publisher<ByteArray> {
        return this.transport(options,payload, apiPath, buildAuthorizationHeader(options, String(payload)))
    }

    fun transport(options: ClientOptions, payload: ByteArray, apiPath: String, authorization: String): Publisher<ByteArray> {

        return httpClient
                .headers {
                    it.add("Content-Type", options.contentType)
                    it.add("Authorization", authorization)
                    options.requestParameters?.entries?.forEach { reqParam ->
                        it.add(reqParam.key, reqParam.value)
                    }
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


    private fun buildAuthorizationHeader(options: ClientOptions, payload: String): String {
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

}