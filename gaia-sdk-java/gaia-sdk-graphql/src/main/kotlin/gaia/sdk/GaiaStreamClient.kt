package gaia.sdk

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter
import io.reactivex.Flowable
import org.reactivestreams.Publisher
import org.slf4j.LoggerFactory
import java.io.File
import java.net.URLEncoder


class GaiaStreamClient(private val options: ClientOptions, private val transporter: ITransporter) {

    private val jsonparser = ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
    private val log = LoggerFactory.getLogger(GaiaStreamClient::class.java)


    fun <T> post(payload: Any, type: Class<T>, apiPath: String = "", contentType: String = options.contentType, queryParameters: Map<String, Any> = mapOf()): Publisher<T> {
        val bytes = convertToByteArray(payload)
        return transporter.transport(options.withContentType(contentType), bytes, buildUri(apiPath, queryParameters)).byteArrayCast(jsonparser, type)
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

    private fun urlEncode(string: Any) =URLEncoder.encode(string.toString(), "UTF-8")
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
