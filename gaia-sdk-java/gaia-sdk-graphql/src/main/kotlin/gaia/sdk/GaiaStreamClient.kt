package gaia.sdk

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.IStreamTransporter
import io.reactivex.Flowable
import org.reactivestreams.Publisher
import org.slf4j.LoggerFactory
import java.io.File


class GaiaStreamClient(private val options: ClientOptions, private val transporter: IStreamTransporter) {

    companion object {
        private val jsonparser = ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
        private val log = LoggerFactory.getLogger(this::class.java.enclosingClass)//TODO LOGS
    }


    fun <T> postStream(payload: ByteArray, type: Class<T> , apiPath: String="", requestParameters: Map<String, Any>): Publisher<T> {
        val requestOptions = options
                .withContentType("application/octet-stream")
                .withRequestParameters(requestParameters)
        return this.post(payload, type, apiPath, requestOptions)
    }

    fun <T> post(payload: Any, type: Class<T>, apiPath: String = "", clientOptions: ClientOptions= options): Publisher<T> {
        val bytes : ByteArray= when(payload){
            is ByteArray -> payload
            else -> jsonparser.writeValueAsBytes(payload)
        }

        val function = object : Function1<Publisher<ByteArray>, Publisher<T>> {
            override fun invoke(p1: Publisher<ByteArray>): Publisher<T> {
                return Flowable.fromPublisher(p1).map { byteArray ->
                    jsonparser.readValue(byteArray, type)
                }.cast(type)
            }
        }
        return transporter.transport(clientOptions, function,bytes, apiPath)
    }

    fun postAndRetrieveBinary(payload: Any, apiPath: String): Publisher<File> {
        val bytes : ByteArray= when(payload){
            is ByteArray -> payload
            else -> jsonparser.writeValueAsBytes(payload)
        }

        val function = object : Function1<Publisher<ByteArray>, Publisher<File>> {
            override fun invoke(p1: Publisher<ByteArray>): Publisher<File> {
                return Flowable.fromPublisher(p1)
                        .map {
                            val file = File.createTempFile("${System.currentTimeMillis()}-", "-gaia-sdk-download")
                            file.writeBytes(it)
                            file
                        }
            }
        }
         return transporter.transport(options, function, bytes, apiPath)
    }
}
