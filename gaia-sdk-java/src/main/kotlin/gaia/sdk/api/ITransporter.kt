package gaia.sdk.api

import org.reactivestreams.Publisher

interface ITransporter {

    fun <T> transport(options: ClientOptions, type: Class<T>, payload: ByteArray): Publisher<T>
}
