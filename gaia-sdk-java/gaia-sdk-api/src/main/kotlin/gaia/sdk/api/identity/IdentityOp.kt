package gaia.sdk.api.identity

import gaia.sdk.GaiaStreamClient
import gaia.sdk.api.data.DataRef
import gaia.sdk.api.data.request.BinaryWriteChunkImpulse
import gaia.sdk.api.identity.request.CompleteIdentityWriteImpulse
import gaia.sdk.api.data.request.InitBinaryWriteImpulse
import gaia.sdk.api.data.response.DataUploadChunkResponse
import gaia.sdk.api.data.response.DataUploadResponse
import gaia.sdk.api.identity.request.IdentitySourceRequestImpulse
import io.reactivex.Flowable
import io.reactivex.schedulers.Schedulers
import org.reactivestreams.Publisher
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import java.io.File
import java.io.FileOutputStream
import java.util.*
import kotlin.math.ceil

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


    fun import(tenantId: String, identityName: String, content: File, override: Boolean = false, identityId: String?): Flowable<DataRef> {
        val uri = "gaia://user@$tenantId/identities/";
        val upload = IdentityUpload.create(DataRef.concatUri(uri, content.name),
                tenantId,
                identityId ?: UUID.randomUUID().toString(),
                identityName,
                content,
                override)
        return Flowable.fromPublisher(upload.execute(this.client))
    }
}

class IdentityUpload(private val uri: String, private val tenantId: String, private val identityId: String, private val identityName: String,
                     private val content: File, private val totalNumberOfChunks: Long, private val override: Boolean) {
    companion object {
        private val CHUNK_SIZE: Int = 1024 * 1024 * 5
        private val log: Logger = LoggerFactory.getLogger(IdentityUpload::class.java)

        fun create(uri: String, tenantId: String, identityId: String, identityName: String, content: File, override: Boolean = false): IdentityUpload {
            val numberOfChunks = ceil(content.length().toDouble().div(CHUNK_SIZE.toDouble())).toLong()
            log.info("Upload will be chunked in $numberOfChunks chunks of size: $CHUNK_SIZE")
            return IdentityUpload(uri, tenantId, identityId, identityName, content, numberOfChunks, override)
        }
    }

    fun execute(client: GaiaStreamClient): Publisher<DataRef> {
        log.info("EXECUTE")
        return Flowable.fromPublisher(initUpload(client))
                .doOnNext { log.debug("Data uploaded initiated. UploadId ${it.uploadId}") }
                .map { response -> response.uploadId }
                .flatMap { uploadId ->
                    this.uploadChunks(uploadId, client)
                            .toList()
                            .toFlowable()
                            .flatMap { chunkIds ->
                                completeUpload(uploadId, chunkIds, client)
                                        .map { DataRef(this.uri, client) }
                            }
                }
    }

    private fun initUpload(client: GaiaStreamClient) = client.post(InitBinaryWriteImpulse(this.uri, this.totalNumberOfChunks,
            this.content.length(), this.override), DataUploadResponse::class.java, "/identity/sink/init")

    private fun uploadChunks(uploadId: String, client: GaiaStreamClient): Flowable<ChunkResponse> {
        log.info("Upload Chunks")
        val fileChunkIterator = this.content.chunkedSequence(CHUNK_SIZE).iterator()
        return Flowable.fromIterable(ChunkIterable(fileChunkIterator.withIndex()))
                .observeOn(Schedulers.io())
                .map { sendChunk(it, uploadId, client) }
    }

    private fun sendChunk(it: IndexedValue<ByteArray>, uploadId: String, client: GaiaStreamClient): ChunkResponse {
        val chunk = BinaryWriteChunkImpulse(uri, uploadId, it.index.toLong() + 1, it.value.size.toLong(), it.value)
        return Flowable.fromPublisher(client.post(chunk.chunk, DataUploadChunkResponse::class.java, "/identity/sink/chunk", "application/octet-stream", chunk.requestParameters()))
                .map { ChunkResponse(chunk.ordinal, it) }
                .doOnNext { log.debug("Chunk number ${it.ordinal} was sent and response ${it.res} was received") }.blockingFirst()
    }

    private fun completeUpload(uploadId: String, chunkIds: List<ChunkResponse>, client: GaiaStreamClient) = Flowable.fromPublisher(
        client.post(CompleteIdentityWriteImpulse(this.uri, this.tenantId, this.identityId, this.identityName,
                uploadId, chunkIds.sortedBy { it.ordinal }.map { it.res.chunkId }, this.override), DataUploadResponse::class.java, "/identity/sink/complete"))
        .doOnError { reason ->
            val msg = "Upload to uri " + this.uri + " failed: " + reason.message
            log.error(msg)
            throw RuntimeException(msg)
        }

}

class ChunkIterable(val iterator: Iterator<IndexedValue<ByteArray>>) : Iterable<IndexedValue<ByteArray>> {
    override fun iterator(): Iterator<IndexedValue<ByteArray>> = iterator
}

data class ChunkResponse(val ordinal: Long, val res: DataUploadChunkResponse)

fun File.chunkedSequence(chunk: Int): Sequence<ByteArray> {
    val input = this.inputStream().buffered()
    val buffer = ByteArray(chunk)
    return generateSequence {
        val red = input.read(buffer)
        if (red >= 0) buffer.copyOf(red)
        else {
            input.close()
            null
        }
    }
}
