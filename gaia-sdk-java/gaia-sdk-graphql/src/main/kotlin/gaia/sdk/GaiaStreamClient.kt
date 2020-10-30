package gaia.sdk

import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter
import org.reactivestreams.Publisher


class GaiaStreamClient(private val options: ClientOptions, private val transporter: ITransporter) {

    /**
     * It sends a post request to the endpoint defined by the clientOptions + apiPath.
     * @param payload Object to be transported
     * @param apiPath Relative path of the endpoint used as final destination for the post operation
     * @param contentType contentType of the request
     * @param queryParameters Query parameters of the request
     * @return A Publisher of type T
     */
    fun <T> post(payload: Any, type: Class<T>, apiPath: String = "", contentType: String = options.contentType, queryParameters: Map<String, Any> = mapOf()): Publisher<T> {
        return transporter.transport(options.withContentType(contentType),payload, type, apiPath, queryParameters)
    }


}


