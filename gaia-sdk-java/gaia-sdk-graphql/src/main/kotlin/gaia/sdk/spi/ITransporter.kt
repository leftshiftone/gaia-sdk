package gaia.sdk.spi

import org.reactivestreams.Publisher
interface ITransporter {
    /**
     * It transports a given ByteArray to a specific destination and also the response to the emitter
     * @param options Object containing base API and HTTP Headers
     * @param payload ByteArray which is transported
     * @param apiPath Destination of the transported payload
     * @return A Publisher of type T
     */
    fun transport(options: ClientOptions, payload: ByteArray, apiPath: String=""): Publisher<ByteArray>
}
