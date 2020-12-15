package gaia.sdk.api.identity

import com.sun.net.httpserver.Authenticator
import gaia.sdk.GaiaStreamClient
import gaia.sdk.api.data.DataRef
import gaia.sdk.api.data.DataUpload
import gaia.sdk.api.identity.request.IdentityImportImpulse
import gaia.sdk.api.data.response.DataUploadResponse
import gaia.sdk.api.data.response.IdentityImportResponse
import gaia.sdk.api.identity.request.IdentitySourceRequestImpulse
import io.reactivex.Flowable
import io.reactivex.schedulers.Schedulers
import org.reactivestreams.Publisher
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import java.io.File
import java.io.FileOutputStream
import java.util.*

class IdentityOp(private val client: GaiaStreamClient) {

    private val log: Logger = LoggerFactory.getLogger(IdentityOp::class.java)

    /**
     * Exports an identity from the DataStorage. It streams all bytes to a FileOutpuStream and once all bytes have been
     * transferred, the created file is returned
     * @param id ID of the identity to be exported
     * @param filePath Path of the file where the downloaded data will be persisted
     * @return Publisher of the written file
     */
    fun export(id: String, filePath: String = "SDK-IdentityRef.export_${System.currentTimeMillis()}_$id.zip"): Publisher<File> {
        assert(!id.isBlank()) { "Identity ID must be set in order to export an identity" }

        return Flowable.fromCallable {
            log.info("Exporting identity with ID $id to $filePath")
            FileOutputStream(filePath)
        }
                .flatMap { fos -> exportToStream(fos, id, filePath) }
                .doOnComplete { log.info("Identity with ID $id successfully exported to $filePath.") }
    }

    private fun exportToStream(identityOutputStream: FileOutputStream, identityId: String, filePath: String) =
            this.client.streamBytes(IdentitySourceRequestImpulse(identityId), "/identity/source")
                    .observeOn(Schedulers.io())
                    .reduce(identityOutputStream, { result: FileOutputStream, nextBytes: ByteArray ->
                        result.write(nextBytes)
                        result
                    })
                    .map { File(filePath) }
                    .doOnError { log.error("Export of identity with id $identityId to $filePath failed.", it) }
                    .doFinally { identityOutputStream.close() }
                    .toFlowable()


    fun import(tenantId: String, identityName: String, content: File, override: Boolean = false, identityId: String? = null): Flowable<DataRef> {
        return Flowable.fromPublisher(DataRef("gaia://$tenantId/identities/", this.client).add(content.name, content, override))
            .flatMap { dataRef ->
                Flowable.fromPublisher(client.post(IdentityImportImpulse(dataRef.getUri(),
                    tenantId,
                    identityId ?: UUID.randomUUID().toString(),
                    identityName,
                    override), IdentityImportResponse::class.java, "/identity/import"))
                .doOnError { reason ->
                    val msg = "Importing Identity " + identityName + " failed: " + reason.message
                    log.error(msg)
                }
                .map {
                    dataRef
                }
            }
            .doOnError { log.error("Upload of identity with name $identityName failed.") }
    }
}
