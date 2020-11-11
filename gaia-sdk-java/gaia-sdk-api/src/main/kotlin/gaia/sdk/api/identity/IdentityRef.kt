package gaia.sdk.api.identity

import gaia.sdk.GaiaStreamClient
import gaia.sdk.api.data.DataRef
import gaia.sdk.api.identity.request.IdentitySourceRequestImpulse
import io.reactivex.Flowable
import io.reactivex.internal.functions.ObjectHelper
import io.reactivex.schedulers.Schedulers
import org.reactivestreams.Publisher
import org.reactivestreams.Subscriber
import org.reactivestreams.Subscription
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import java.io.File
import java.io.FileOutputStream
import java.util.concurrent.atomic.AtomicLong

class IdentityRef(private val id: String?, private val client: GaiaStreamClient) {

    private val log: Logger = LoggerFactory.getLogger(DataRef::class.java)

    fun export(): Publisher<File> {

        ObjectHelper.requireNonNull(this.id, "identity is null, is required for export")

        return Flowable.fromPublisher(doExport())
                .doOnError { reason ->
                    throw RuntimeException("Exporting identity with id ${this.id} failed: ${reason.message}") }
                .onErrorResumeNext(Flowable.empty())
    }

    private fun doExport(): Publisher<File> {

        val identityName = this.id + "_" + System.currentTimeMillis()

        log.info("Export identity with ID $this.id")
        this.client.streamBytes(IdentitySourceRequestImpulse(this.id!!), "/identity/source")
                .observeOn(Schedulers.io())
                .blockingSubscribe(IdentityWriteSubscriber(identityName))

        return Flowable.just(File(identityName))
    }
}

class IdentityWriteSubscriber(private val fos: FileOutputStream, private val filePath: String) : Subscriber<ByteArray> {

    private val bytesDownloaded = AtomicLong(0)

    constructor(filePath: String): this(FileOutputStream(filePath), filePath)

    companion object {
        private val log: Logger = LoggerFactory.getLogger(IdentityWriteSubscriber::class.java)
    }

    override fun onSubscribe(s: Subscription) { s.request(Long.MAX_VALUE)}

    override fun onNext(bytes: ByteArray) {
        log.trace("Downloaded bytes: ${bytesDownloaded.addAndGet(bytes.size.toLong())} to write in file $filePath")
        fos.write(bytes)
    }

    override fun onError(t: Throwable?) {} //FIXME when connection is closed, but the complete file is transferred, no exception should be thrown

    override fun onComplete() {
        log.trace("Complete signal was sent. Closing FileOutputStream")
        fos.close()
    }

}
