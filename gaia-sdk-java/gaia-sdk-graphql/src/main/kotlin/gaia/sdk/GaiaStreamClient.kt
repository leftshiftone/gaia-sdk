package gaia.sdk

import DataUploadChunkResponse
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


    fun postStream(payload: ByteArray, requestParameters: Map<String, Any>, apiPath: String = ""): Publisher<DataUploadChunkResponse> {
        val requestOptions = options
                .withContentType("application/octet-stream")
                .withRequestParameters(requestParameters)

        val function = object : Function1<Publisher<ByteArray>, Publisher<DataUploadChunkResponse>> {
            override fun invoke(p1: Publisher<ByteArray>): Publisher<DataUploadChunkResponse> {
                return Flowable.fromPublisher(p1).map { byteArray ->
                    jsonparser.readValue(byteArray,DataUploadChunkResponse::class.java)
                }.cast(DataUploadChunkResponse::class.java)
            }
        }
         return transporter.transportS(requestOptions, function, payload, apiPath)
    }

    fun <T> post(payload: Any, type: Class<T>, apiPath: String = ""): Publisher<T> {
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
        return transporter.transportS(options, function,bytes, apiPath)
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
         return transporter.transportS(options, function, bytes, apiPath)
    }


    fun <T> transport(type: Class<T>, payload: Map<String, Any?>, apiPath: String = ""): Publisher<T> {
        return transporter.transport(options, type, payload, apiPath)
    }
}
