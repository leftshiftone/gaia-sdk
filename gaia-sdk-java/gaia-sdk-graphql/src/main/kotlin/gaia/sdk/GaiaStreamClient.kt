package gaia.sdk

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter
import org.reactivestreams.Publisher
import org.slf4j.LoggerFactory
import java.io.File
import java.net.URLEncoder


class GaiaStreamClient(private val options: ClientOptions, private val transporter: ITransporter) {

    companion object {
        private val jsonparser = ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
        private val log = LoggerFactory.getLogger(this::class.java.enclosingClass)//TODO LOGS
    }


    fun <T> postStream(payload: Any, type: Class<T>, apiPath: String = "", requestParameters: Map<String, Any>): Publisher<T> {

        val queryParams = requestParameters
                .entries
                .map { p -> "${URLEncoder.encode(p.key, "UTF-8")}=${URLEncoder.encode(p.value.toString(), "UTF-8")}" }
                .reduce({ p1, p2 -> p1 + "&" + p2 })


        val requestOptions = options
                .withContentType("application/octet-stream")
                .withRequestParameters(requestParameters)
        return this.post(payload, type, apiPath+"?${queryParams}", requestOptions)
    }

    fun <T> post(payload: Any, type: Class<T>, apiPath: String = "", clientOptions: ClientOptions = options): Publisher<T> {
        val bytes : ByteArray= when(payload){
            is ByteArray -> payload
            else -> jsonparser.writeValueAsBytes(payload)
        }

        return transporter.transport(clientOptions, bytes, apiPath).byteArrayCast(jsonparser, type)
    }

    fun postAndRetrieveBinary(payload: Any, apiPath: String): Publisher<File> {
        val bytes : ByteArray= when(payload){
            is ByteArray -> payload
            else -> jsonparser.writeValueAsBytes(payload)
        }

        return transporter.transport(options, bytes, apiPath).byteArrayToFile()
    }
}

