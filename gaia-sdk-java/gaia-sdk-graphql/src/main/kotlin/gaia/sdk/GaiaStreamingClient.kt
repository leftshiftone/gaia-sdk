package gaia.sdk

import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter
import org.reactivestreams.Publisher
import org.slf4j.LoggerFactory


class GaiaStreamingClient(private val options: ClientOptions, private val transporter: ITransporter) {

    companion object {
        private val log = LoggerFactory.getLogger(this::class.java.enclosingClass)
    }

    fun <T> transport(type: Class<T>, payload: Map<String, Any?>, apiPath: String = ""): Publisher<T> {
        return transporter.transport(options, type, payload, apiPath)
    }
}
