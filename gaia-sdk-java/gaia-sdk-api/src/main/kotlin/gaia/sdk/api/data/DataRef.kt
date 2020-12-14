package gaia.sdk.api.data

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import gaia.sdk.GaiaCredentials
import gaia.sdk.GaiaStreamClient
import gaia.sdk.api.data.request.*
import gaia.sdk.api.data.response.*
import io.reactivex.Flowable
import io.reactivex.schedulers.Schedulers
import jdk.nashorn.internal.runtime.Undefined
import org.reactivestreams.Publisher
import org.reactivestreams.Subscriber
import org.reactivestreams.Subscription
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import java.io.File
import java.io.FileOutputStream
import java.util.concurrent.atomic.AtomicLong
import kotlin.math.ceil

class DataRef(private val uri: String, private val client: GaiaStreamClient) {

    private val log: Logger = LoggerFactory.getLogger(DataRef::class.java)

    companion object {
        fun concatUri(baseUri: String, vararg paths: String): String {
            val uris = paths.map { path ->
                path.removePrefix("/").removeSuffix("/")
            }.joinToString("/")
            return "${baseUri.removeSuffix("/")}/$uris"
        }
    }

    fun getUri(): String {
        return uri
    }

    /**
     * Adds a file to the directory specified by the uri member of this class.
     * If the file already exists at the given uri, it is only overwritten if override is set, else the Observable fails.
     *
     * @param fileName name of the new file to be written
     * @param content binary content of the file to be written
     * @param override flag to decide if existing files should be overwritten
     * @param config interface which currently only contains onUploadProgress callback
     */
    fun add(fileName: String, content: File, override: Boolean = false, config: DataRefRequestConfig? = null): Flowable<DataRef> {
        log.info("Add $fileName to ${this.uri}")
        val upload = DataUpload.create(concatUri(this.uri, fileName), content, override, config)
        return Flowable.fromPublisher(upload.execute(this.client))
    }

    /**
     * Lists all files whose uri has the current uri member as its prefix.
     */
    fun list(): Publisher<List<FileListing>> {
        log.info("List from " + this.uri)
        return Flowable.fromPublisher(this.client.post(ListFilesImpulse(this.uri), FileList::class.java, "/data/list"))
                .map { it.fileListItems }
                .doOnError { reason -> throw RuntimeException("Listing files at uri " + this.uri + " failed: " + reason.message) }
    }

    private fun removeFileAt(uri: String): Publisher<FileRemovedImpulse> {
        log.info("Remove: " + uri)
        return Flowable.fromPublisher(this.client.post(RemoveFileImpulse(uri), FileRemovedImpulse::class.java, "/data/remove"))
                .doOnError { reason -> throw RuntimeException("Removing file with uri " + uri + " failed: " + reason.message) }

    }

    /**
     * Removes a file from the the directory specified by the uri member of this class.
     *
     * @param fileName the name of the file to be removed
     * @returns an Observable<boolean> that is true if the file existed
     */
    fun removeFile(fileName: String): Publisher<FileRemovedImpulse> {
        return this.removeFileAt(concatUri(this.uri, fileName))
    }

    /**
     * Removes a file at the uri of this DataRef
     *
     * @returns an Publisher<boolean> that is true if the file existed
     */
    fun remove(): Publisher<FileRemovedImpulse> {
        return Flowable.fromPublisher(this.removeFileAt(this.uri))
    }

    /**
     * It downloads a file from the DataStorage. It streams all bytes to a FileOutpuStream and once all bytes have been transferred, the created file is returned
     * @param filePath Path of the file where the downloaded data will be persisted
     * @return Publisher of the written file.
     */
    fun asFile(filePath: String = "SDK-DataRef.asFile-${System.currentTimeMillis()}"): Publisher<File> {
        log.info("Download file from ${this.uri} to $filePath")
        return Flowable.fromCallable { FileOutputStream(filePath) }
                .flatMap { downloadToStream(it, filePath) }
                .doOnComplete { log.info("Download of file from ${this.uri} to $filePath successful") }
    }

    private fun downloadToStream(fileOutputStream: FileOutputStream, filePath: String) =
            this.client.streamBytes(BinaryReadImpulse(this.uri), "/data/source")
                    .observeOn(Schedulers.io())
                    .reduce(fileOutputStream, { result: FileOutputStream, nextBytes: ByteArray ->
                        result.write(nextBytes)
                        result
                    })
                    .map { File(filePath) }
                    .doOnError { log.error("Download of file at ${this.uri} to $filePath failed.") }
                    .doFinally { fileOutputStream.close() }
                    .toFlowable()

    /**
     * It downloads a file from the DataStorage. It streams all bytes
     * @return Publisher of the byteArrays that are part of the content of the uri
     */
    fun asStream(): Publisher<ByteArray> {
        log.info("Download bytes from $this.uri")
        return this.client.streamBytes(BinaryReadImpulse(this.uri), "/data/source")
    }
}

class DataUpload(private val uri: String, private val content: File, private val totalNumberOfChunks: Long,
                 private val override: Boolean, private val config: DataRefRequestConfig? = null) {
    companion object {
        private val CHUNK_SIZE: Int = 1024 * 1024 * 5
        private val log: Logger = LoggerFactory.getLogger(DataUpload::class.java)

        fun create(uri: String, content: File, override: Boolean = false, config: DataRefRequestConfig? = null): DataUpload {
            val numberOfChunks = ceil(content.length().toDouble().div(CHUNK_SIZE.toDouble())).toLong()
            log.info("Upload will be chunked in $numberOfChunks chunks of size: $CHUNK_SIZE")
            return DataUpload(uri, content, numberOfChunks, override, config)
        }
    }

    fun execute(client: GaiaStreamClient): Publisher<DataRef> {
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

    private fun initUpload(client: GaiaStreamClient) = client.post(InitBinaryWriteImpulse(this.uri, this.override), DataUploadResponse::class.java, "/data/sink/init")

    private fun uploadChunks(uploadId: String, client: GaiaStreamClient): Flowable<ChunkResponse> {
        val fileChunkIterator = this.content.chunkedSequence(CHUNK_SIZE).iterator()
        return Flowable.fromIterable(ChunkIterable(fileChunkIterator.withIndex()))
                .observeOn(Schedulers.io())
                .map { sendChunk(it, uploadId, client) }
    }

    private fun sendChunk(it: IndexedValue<ByteArray>, uploadId: String, client: GaiaStreamClient): ChunkResponse {
        val chunk = BinaryWriteChunkImpulse(uri, uploadId, it.index.toLong() + 1, it.value.size.toLong(), it.value)
        return Flowable.fromPublisher(client.post(chunk.chunk, DataUploadChunkResponse::class.java, "/data/sink/chunk", "application/octet-stream", chunk.requestParameters()))
                .map { ChunkResponse(chunk.ordinal, it) }
                .doOnNext {
                    log.debug("Chunk number ${it.ordinal} was sent and response ${it.res} was received")
                    val progress = (100 * (it.ordinal)) / this.totalNumberOfChunks
                    this.config?.onUploadProgress(ceil(progress.toDouble()).toInt())
                }.blockingFirst()
    }

    private fun completeUpload(uploadId: String, chunkIds: List<ChunkResponse>, client: GaiaStreamClient) = Flowable.fromPublisher(
            client.post(CompleteBinaryWriteImpulse(this.uri, uploadId, chunkIds.sortedBy { it.ordinal }.map { it.res.chunkId }), DataUploadResponse::class.java, "/data/sink/complete"))
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

public interface DataRefRequestConfig {
    fun onUploadProgress(progress: Int);
}
