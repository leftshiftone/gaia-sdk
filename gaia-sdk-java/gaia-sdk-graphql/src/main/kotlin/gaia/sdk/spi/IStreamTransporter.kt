package gaia.sdk.spi

import org.reactivestreams.Publisher
//TODO AGP Rename Transporter
interface IStreamTransporter {
    fun <T> transport(options: ClientOptions, postProcessingFunction: Function1<Publisher<ByteArray>, Publisher<T>>, payload: ByteArray, apiPath: String=""): Publisher<T>
}
