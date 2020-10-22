package gaia.sdk.spi

import org.reactivestreams.Publisher

interface IStreamTransporter {
//TODO make Standard transport compatible with new one containing callback
    fun <T> transportS(options: ClientOptions, postProcessingFunction: Function1<Publisher<ByteArray>, Publisher<T>>, payload: ByteArray, apiPath: String): Publisher<T>
    fun <T> transport(options: ClientOptions, type: Class<T>, payload: Map<String, Any?>, apiPath: String): Publisher<T>
}
