import {InitBinaryWriteImpulse} from "../graphql/request/input/InitBinaryWriteImpulse";
import {CompleteBinaryWriteImpulse} from "../graphql/request/input/CompleteBinaryWriteImpulse";
import {BinaryWriteChunkImpulse} from "../graphql/request/input/BinaryWriteChunkImpulse";
import {from, Observable} from "rxjs";
import {ListFilesImpulse} from "../graphql/request/input/ListFilesImpulse";
import {FileListing} from "../graphql/response/type/FileListing";
import {RemoveFileImpulse} from "../graphql/request/input/RemoveFileImpulse";
import {FileRemovedImpulse} from "../graphql/response/type/FileRemovedImpulse";
import {BinaryReadImpulse} from "../graphql/request/input/BinaryReadImpulse";
import Blob from "cross-blob"
import {GaiaStreamClient} from "../graphql/GaiaStreamClient";

export class DataRef {
    private readonly client: GaiaStreamClient;
    private readonly uri: string;

    constructor(uri: string, client: GaiaStreamClient) {
        this.uri = uri;
        this.client = client;
    }

    /**
     * Adds a file to the directory specified by the uri member of this class.
     * If the file already exists at the given uri, it is only overwritten if override is set, else the Observable fails.
     *
     * @param fileName name of the new file to be written
     * @param content binary content of the file to be written
     * @param override flag to decide if existing files should be overwritten
     */
    public add(fileName: string, content: Blob, override: boolean = false): Observable<DataRef> {
        console.log("Add " + fileName + " to " + this.uri);
        let upload = DataUpload.create(DataRef.concatUri(this.uri, fileName), content, override)
        return from(upload.execute(this.client))
    }


    /**
     * Lists all files whose uri has the current uri member as its prefix.
     */
    public list(): Observable<FileListing[]> {
        console.log("List from " + this.uri);
        return from(this.client.post(new ListFilesImpulse(this.uri), "/data/list")
            .catch(reason => {
                throw new Error("Listing files at uri " + this.uri + " failed: " + reason)
            }))
    }

    private removeFileAt(uri: string): Observable<FileRemovedImpulse> {
        console.log("Remove: " + uri)
        return from(this.client.post(new RemoveFileImpulse(uri), "/data/remove")
            .catch(reason => {
                throw new Error("Removing file with uri " + uri + " failed: " + reason)
            }))
    }

    /**
     * Removes a file from the the directory specified by the uri member of this class.
     *
     * @param fileName the name of the file to be removed
     * @returns an Observable<boolean> that is true if the file existed
     */
    public removeFile(fileName: string): Observable<FileRemovedImpulse> {
        return this.removeFileAt(DataRef.concatUri(this.uri, fileName))
    }

    /**
     * Removes a file at the uri of this DataRef
     *
     * @returns an Observable<boolean> that is true if the file existed
     */
    public remove(): Observable<FileRemovedImpulse> {
        return this.removeFileAt(this.uri)
    }

    public asFile(): Observable<Blob> {
        console.log("Download file from " + this.uri)
        return from(this.client.postAndRetrieveBinary(new BinaryReadImpulse(this.uri), "/data/source")
            .catch(reason => {
                throw new Error("Download of file with uri " + this.uri + " failed: " + reason)
            }))
    }

    public asStream() {
        console.log("asStream")
        throw new Error("Not implemented")
    }

    public append(dataToAppend: any) {
        console.log("Append: " + dataToAppend)
        throw new Error("Not implemented")
    }

    public static concatUri(baseUri: string, ...paths: string[]): string {
        let uri = paths.reduce((uri, path) => {
            let uriWithTrailingSlash = uri.endsWith("/") ? uri : uri + "/"
            let pathWithoutLeadingSlash = path.startsWith("/") ? path.substr(1) : path
            return uriWithTrailingSlash + pathWithoutLeadingSlash
        }, baseUri)
        return uri.endsWith("/") ? uri.substr(0, uri.length - 1) : uri
    }
}

class DataUpload {
    private static readonly CHUNK_SIZE = 1024 * 1024 * 1024 * 5;
    private readonly uri: string;
    private readonly content: Blob;
    private readonly totalNumberOfChunks: number;
    private readonly override: boolean;


    constructor(uri: string, content: Blob, totalNumberOfChunks: number, override: boolean) {
        this.uri = uri;
        this.content = content;
        this.totalNumberOfChunks = totalNumberOfChunks;
        this.override = override;
    }

    public static create(uri: string, content: Blob, override: boolean = false): DataUpload {
        let numberOfChunks = Math.ceil(content.size / DataUpload.CHUNK_SIZE)
        return new DataUpload(uri, content, numberOfChunks, override)
    }

    private async sendChunks(uploadId: string, client: GaiaStreamClient) {
        return await Promise.all(this.getChunkRequests(uploadId)
            .map(chunkRequest => chunkRequest.asFormData()
                .then(formData => client.postFormData(formData, "/data/sink/chunk"))))
    }

    public async execute(client: GaiaStreamClient): Promise<DataRef> {
        const initResponse = await client.post(new InitBinaryWriteImpulse(this.uri, this.totalNumberOfChunks, this.content.size, this.override), "/data/sink/init")
        const chunkResponses = await this.sendChunks(initResponse.uploadId, client)
        const chunkIds = chunkResponses.map(r => r.chunkId)
        return client.post(new CompleteBinaryWriteImpulse(this.uri, chunkResponses[0].uploadId, chunkIds), "/data/sink/complete")
            .then(() => new DataRef(this.uri, client), reason => {
                    throw new Error("Upload to uri " + this.uri + " failed: " + reason.stack)
                }
            )
    }

    private getChunkRequests(uploadId: string): BinaryWriteChunkImpulse[] {
        let chunks = new Array<Blob>()
        for (let index = 0; index < this.totalNumberOfChunks; index++) {
            chunks.push(this.content.slice(DataUpload.CHUNK_SIZE * index, Math.min(DataUpload.CHUNK_SIZE * (index + 1), this.content.size)))
        }
        return chunks.map((chunk, index) => new BinaryWriteChunkImpulse(this.uri, uploadId, index + 1, chunk.size, chunk))
    }
}
