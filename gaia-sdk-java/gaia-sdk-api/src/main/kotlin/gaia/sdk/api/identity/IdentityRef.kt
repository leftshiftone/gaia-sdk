package gaia.sdk.api.identity

import gaia.sdk.GaiaStreamClient
import gaia.sdk.api.data.DataRef
import gaia.sdk.api.identity.request.IdentitySourceRequestImpulse
import io.reactivex.internal.functions.ObjectHelper
import io.reactivex.schedulers.Schedulers
import org.reactivestreams.Publisher
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import java.io.File
import java.io.FileOutputStream

class IdentityRef(private val id: String?, private val client: GaiaStreamClient) {

    private val log: Logger = LoggerFactory.getLogger(DataRef::class.java)

    fun export(filePath: String = "SDK-IdentityRef.export_${System.currentTimeMillis()}_${this.id}.zip"): Publisher<File> {
        ObjectHelper.requireNonNull(this.id, "Identity ID of IdentityRef must be set in order to export an identity")

        log.info("Exporting identity with ID ${this.id} to $filePath")
        return this.client.streamBytes(IdentitySourceRequestImpulse(this.id!!), "/identity/source")
                .observeOn(Schedulers.io())
                .reduce(FileOutputStream(filePath), { result: FileOutputStream, nextBytes: ByteArray ->
                    result.write(nextBytes)
                    result
                })
                .map { fos ->
                    fos.close()
                    File(filePath)
                }.toFlowable()
    }
}
