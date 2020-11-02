package gaia.sdk.spi

import org.reactivestreams.Publisher
interface ITransporter {

    /**
     * It transports a given object to a specific destination and also the response to the emitter
     * @param options Object containing base API and HTTP Headers
     * @param payload Object to be transported
     * @param apiPath Relative path of the endpoint used as final destination for the transported payload
     * @param queryParameters Query parameters of the request
     * @return A Publisher of type T
     */
    fun <T> transport(options: ClientOptions, payload:Any, type: Class<T>, apiPath: String, queryParameters: Map<String, Any>): Publisher<T>

    /**
     * It transports a given object to a specific destination and also the response to the emitter
     * @param options Object containing base API and HTTP Headers
     * @param payload Object to be transported
     * @param apiPath Relative path of the endpoint used as final destination for the transported payload
     * @return A Publisher of type T
     */
    fun <T> transport(options: ClientOptions, payload:Any, type: Class<T>, apiPath: String): Publisher<T>

    /**
     * It transports a given object to a specific destination and also the response to the emitter
     * @param options Object containing base API and HTTP Headers
     * @param payload Object to be transported
     * @return A Publisher of type T
     */
    fun <T> transport(options: ClientOptions, payload: Any, type: Class<T>): Publisher<T>
}
