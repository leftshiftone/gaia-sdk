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




    fun <T> post(payload: Any, type: Class<T>, apiPath: String = "", contentType: String = options.contentType, queryParameters: Map<String, Any> = mapOf()): Publisher<T> {

        return transporter.transport(options.withContentType(contentType),payload, type, apiPath, queryParameters)
    }


}


