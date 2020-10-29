package gaia.sdk.api
import gaia.sdk.GaiaStreamClient
import gaia.sdk.api.data.request.*
import gaia.sdk.api.data.response.*
import io.reactivex.Flowable
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

    fun getUri(): String{
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
                .doOnError { reason -> throw RuntimeException ("Listing files at uri " + this.uri + " failed: " + reason.message)}
    }

    private fun removeFileAt(uri: String): Publisher<FileRemovedImpulse> {
        log.info("Remove: " + uri)
        return Flowable.fromPublisher(this.client.post(RemoveFileImpulse(uri),FileRemovedImpulse::class.java, "/data/remove"))
                .doOnError{reason -> throw RuntimeException("Removing file with uri " + uri + " failed: " + reason.message)}

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
        return Flowable.fromPublisher(this.client.postAndRetrieveBinary( BinaryReadImpulse(this.uri), "/data/source"))
                .doOnError{ reason -> throw RuntimeException("Download of file with uri " + this.uri + " failed: " + reason.message)}
    }

}

class DataUpload(private val uri: String, private val content: File, private val totalNumberOfChunks: Long, private val override: Boolean) {

    companion object {
        private val CHUNK_SIZE: Int = 1024 * 1024 * 5

        fun create(uri: String, content: File, override: Boolean = false): DataUpload {
            val numberOfChunks = ceil(content.length().toDouble().div(CHUNK_SIZE.toDouble())).toLong()
            return DataUpload(uri, content, numberOfChunks, override)
        }
    }

    private fun sendChunks(uploadId: String, client: GaiaStreamClient): Publisher<DataUploadChunkResponse> {
        return Flowable.fromIterable(this.getChunkRequests(uploadId))
                .flatMap { chunk ->
                    Flowable.fromPublisher(client.postStream(chunk.chunk,DataUploadChunkResponse::class.java, "/data/sink/chunk", chunk.requestParameters()))
                }
    }

    fun execute(client: GaiaStreamClient): Publisher<DataRef> {
        val chunkResponses = ArrayList<DataUploadChunkResponse>()
        val initResponse = Flowable.fromPublisher(
                client.post(
                        InitBinaryWriteImpulse(this.uri, this.totalNumberOfChunks, this.content.length(), this.override), DataUploadResponse::class.java, "/data/sink/init")).blockingFirst()
        Flowable.fromPublisher(this.sendChunks(initResponse.uploadId, client)).blockingSubscribe { chunkResponses += it }//TODO in case of error???
        val chunkIds = chunkResponses.map { it.chunkId }.toList()

        return Flowable.fromPublisher(client.post(CompleteBinaryWriteImpulse(this.uri, initResponse.uploadId, chunkIds), DataUploadResponse::class.java, "/data/sink/complete"))
                .doOnError { reason -> throw RuntimeException("Upload to uri " + this.uri + " failed: " + reason.message) }
                .map { DataRef(this.uri, client) }


    }

    private fun getChunkRequests(uploadId: String): List<BinaryWriteChunkImpulse> {
        val chunkRequests = ArrayList<BinaryWriteChunkImpulse>()
        val fileChunkIterator = this.content.chunkedSequence(CHUNK_SIZE).iterator()
        fileChunkIterator.withIndex().forEach { chunkRequests.add(BinaryWriteChunkImpulse(uri, uploadId, it.index.toLong() + 1, it.value.size.toLong(), it.value)) }
        return chunkRequests
    }

}

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