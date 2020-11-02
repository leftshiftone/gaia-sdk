package gaia.sdk.http

import gaia.sdk.spi.ITransporter
import reactor.netty.http.client.HttpClient

open class TransporterFactory {
    open fun create(url: String): ITransporter {
        return HttpTransporter(url, HttpClient.create())
    }
}
