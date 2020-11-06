package gaia.sdk.api

import gaia.sdk.GaiaStreamClient
import gaia.sdk.api.data.request.*
import gaia.sdk.api.data.response.*
import io.reactivex.Flowable
import io.reactivex.schedulers.Schedulers
import org.reactivestreams.Publisher
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import java.io.File
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
     */
    fun add(fileName: String, content: File, override: Boolean = false): Flowable<DataRef> {
        log.info("Add $fileName to ${this.uri}")
        val upload = DataUpload.create(DataRef.concatUri(this.uri, fileName), content, override)
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
        return this.removeFileAt(DataRef.concatUri(this.uri, fileName))
    }

    /**
     * Removes a file at the uri of this DataRef
     *
     * @returns an Publisher<boolean> that is true if the file existed
     */
    fun remove(): Publisher<FileRemovedImpulse> {
        return Flowable.fromPublisher(this.removeFileAt(this.uri))
    }

    fun asFile(): Publisher<File> {
        log.info("Download file from " + this.uri)
        return Flowable.fromPublisher(this.client.post(BinaryReadImpulse(this.uri), File::class.java, "/data/source"))
                .doOnError { reason -> throw RuntimeException("Download of file with uri " + this.uri + " failed: " + reason.message) }
    }

}

class DataUpload(private val uri: String, private val content: File, private val totalNumberOfChunks: Long, private val override: Boolean) {
    companion object {
        private val CHUNK_SIZE: Int = 1024 * 1024 * 5
        private val log: Logger = LoggerFactory.getLogger(DataUpload::class.java)

        fun create(uri: String, content: File, override: Boolean = false): DataUpload {
            val numberOfChunks = ceil(content.length().toDouble().div(CHUNK_SIZE.toDouble())).toLong()
            log.info("Upload will be chunked in $numberOfChunks chunks of size: $CHUNK_SIZE")
            return DataUpload(uri, content, numberOfChunks, override)
        }
    }

    fun execute(client: GaiaStreamClient): Publisher<DataRef> {
        return Flowable.fromPublisher(initUpload(client))
                .doOnNext { log.debug("Data uploaded initiated. UploadId ${it.uploadId}") }
                .map { response -> response.uploadId }
                .flatMap { uploadId -> this.uploadChunks(uploadId, client)
                            .toList()
                            .toFlowable()
                            .flatMap { chunkIds ->
                                completeUpload(uploadId, chunkIds, client)
                                        .map { DataRef(this.uri, client) }
                            }
                }
    }

    private fun initUpload(client: GaiaStreamClient) = client.post(InitBinaryWriteImpulse(this.uri, this.totalNumberOfChunks, this.content.length(), this.override), DataUploadResponse::class.java, "/data/sink/init")

    private fun uploadChunks(uploadId: String, client: GaiaStreamClient): Flowable<ChunkResponse> {
        val fileChunkIterator = this.content.chunkedSequence(CHUNK_SIZE).iterator()
        return Flowable.fromIterable(ChunkIterable(fileChunkIterator.withIndex()))
                .subscribeOn(Schedulers.newThread())
                .observeOn(Schedulers.io())
                .map { BinaryWriteChunkImpulse(uri, uploadId, it.index.toLong() + 1, it.value.size.toLong(), it.value) }
                .flatMap { chunk ->
                    Flowable.fromPublisher(
                            client.post(chunk.chunk, DataUploadChunkResponse::class.java, "/data/sink/chunk","application/octet-stream",  chunk.requestParameters()))
                            .map { ChunkResponse(chunk.ordinal, it) }
                            .doOnNext { log.debug("Chunk number ${it.ordinal} was sent and response ${it.res} was received. Memory ${Runtime.getRuntime().freeMemory()/1048576.0}") }
                }
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
        println("Memory consumption at generation of sequence: ${Runtime.getRuntime().freeMemory() / 1048576.0} Thread ${Thread.currentThread().name}")
        while (Runtime.getRuntime().freeMemory()/1048576.0< 150) {
            println("Calling GC ${Runtime.getRuntime().freeMemory() / 1048576.0} Thread ${Thread.currentThread().name}")
           System.gc()
             Thread.sleep(500)
             println("Memory after calling GC ${Runtime.getRuntime().freeMemory() / 1048576.0} Thread ${Thread.currentThread().name}")
         }
        val red = input.read(buffer)
        if (red >= 0) buffer.copyOf(red)
        else {
            input.close()
            null
        }
    }
}