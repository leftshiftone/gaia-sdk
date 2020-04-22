package gaia.sdk.spi

import org.reactivestreams.Publisher

interface ITransporter {

    fun <T> transport(options: ClientOptions, type: Class<T>, payload: Map<String, Any>): Publisher<T>
}
