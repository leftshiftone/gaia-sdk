package gaia.sdk

import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter
import io.reactivex.Flowable
import org.reactivestreams.Publisher


class GaiaStreamClient(private val options: ClientOptions, private val transporter: ITransporter) {

    /**
     * It sends a post request to the endpoint defined by the clientOptions + apiPath.
     * @param payload Object to be transported
     * @param type Class use to cast the result of the transport
     * @param apiPath Relative path of the endpoint used as final destination for the post operation
     * @param contentType contentType of the request. In case of not providing any contentType, the contentType specified in ClientOptions will be used
     * @param queryParameters Query parameters of the request.
     * @return A Publisher of type T
     */
    fun <T> post(payload: Any, type: Class<T>, apiPath: String = "", contentType: String = options.contentType, queryParameters: Map<String, Any> = mapOf()): Publisher<T> {
        return transporter.transport(options.withContentType(contentType),payload, type, apiPath, queryParameters)
    }


    /**
     * It sends a post request to the endpoint defined by the clientOptions + apiPath and stream the response in byte array.
     * @param payload Object to be transported
     * @param apiPath Relative path of the endpoint used as final destination for the post operation
     * @param contentType contentType of the request. In case of not providing any contentType, the contentType specified in ClientOptions will be used
     * @return A Publisher of Type ByteArray
     */
    fun streamBytes(payload: Any,  apiPath: String = "", contentType: String = options.contentType): Flowable<ByteArray> {
        return transporter.streamTransport(options.withContentType(contentType),payload, apiPath )
    }

}


