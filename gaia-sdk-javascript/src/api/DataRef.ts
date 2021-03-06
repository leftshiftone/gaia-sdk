import {InitBinaryWriteImpulse} from '../graphql/request/input/InitBinaryWriteImpulse';
import {CompleteBinaryWriteImpulse} from '../graphql/request/input/CompleteBinaryWriteImpulse';
import {BinaryWriteChunkImpulse} from '../graphql/request/input/BinaryWriteChunkImpulse';
import {defer, Observable} from 'rxjs';
import {ListFilesImpulse} from '../graphql/request/input/ListFilesImpulse';
import {FileListing} from '../graphql/response/type/FileListing';
import {RemoveFileImpulse} from '../graphql/request/input/RemoveFileImpulse';
import {FileRemovedImpulse} from '../graphql/response/type/FileRemovedImpulse';
import {BinaryReadImpulse} from '../graphql/request/input/BinaryReadImpulse';
import {GaiaStreamClient} from '../graphql/GaiaStreamClient';
import {BinaryWriteInitiatedImpulse} from "../graphql/response/type/BinaryWriteInitiatedImpulse";
import {BinaryChunkWrittenImpulse} from "../graphql/response/type/BinaryChunkWrittenImpulse";

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
     * @param config optional interface which currently only contains onUploadProgress callback
     */
    public add(fileName: string, content: Blob, override: boolean = false, config?: DataRefRequestConfig): Observable<DataRef> {
        const upload = DataUpload.create(DataRef.concatUri(this.uri, fileName), content, override, config);
        return defer(() => upload.execute(this.client));
    }

    /**
     * Lists all files whose uri has the current uri member as its prefix.
     */
    public list(): Observable<FileListing[]> {
        return defer(() => this.client.post(new ListFilesImpulse(this.uri), '/data/list')
            .catch((reason) => {
                throw new Error('Listing files at uri ' + this.uri + ' failed: ' + reason);
            }));
    }

    private removeFileAt(uri: string): Observable<FileRemovedImpulse> {
        return defer(() => this.client.post(new RemoveFileImpulse(uri), '/data/remove')
            .catch((reason) => {
                throw new Error('Removing file with uri ' + uri + ' failed: ' + reason);
            }));
    }

    /**
     * Removes a file from the the directory specified by the uri member of this class.
     *
     * @param fileName the name of the file to be removed
     * @returns an Observable<boolean> that is true if the file existed
     */
    public removeFile(fileName: string): Observable<FileRemovedImpulse> {
        return this.removeFileAt(DataRef.concatUri(this.uri, fileName));
    }

    /**
     * Removes a file at the uri of this DataRef
     *
     * @returns an Observable<boolean> that is true if the file existed
     */
    public remove(): Observable<FileRemovedImpulse> {
        return this.removeFileAt(this.uri);
    }

    public asFile(): Observable<Blob> {
        return defer(() => this.client.postAndRetrieveBinary(new BinaryReadImpulse(this.uri), '/data/source')
            .catch((reason) => {
                throw new Error('Download of file with uri ' + this.uri + ' failed: ' + reason);
            }));
    }

    public asStream() {
        console.log('asStream');
        throw new Error('Not implemented');
    }

    public append(dataToAppend: any) {
        console.log('Append: ' + dataToAppend);
        throw new Error('Not implemented');
    }

    public static concatUri(baseUri: string, ...paths: string[]): string {
        const uri = paths.reduce((uri, path) => {
            const uriWithTrailingSlash = uri.endsWith('/') ? uri : uri + '/';
            const pathWithoutLeadingSlash = path.startsWith('/') ? path.substr(1) : path;
            return uriWithTrailingSlash + pathWithoutLeadingSlash;
        }, baseUri);
        return uri.endsWith('/') ? uri.substr(0, uri.length - 1) : uri;
    }

    public getUri() {
        return this.uri;
    }
}

class DataUpload {
    private static readonly CHUNK_SIZE = 1024 * 1024 * 5;
    private readonly uri: string;
    private readonly content: Blob;
    private readonly totalNumberOfChunks: number;
    private readonly override: boolean;
    private readonly config?: DataRefRequestConfig;

    constructor(uri: string, content: Blob, totalNumberOfChunks: number, override: boolean, config?: DataRefRequestConfig) {
        this.uri = uri;
        this.content = content;
        this.totalNumberOfChunks = totalNumberOfChunks;
        this.override = override;
        this.config = config;
    }

    public static create(uri: string, content: Blob, override: boolean = false, config?: DataRefRequestConfig): DataUpload {
        const numberOfChunks = Math.ceil(content.size / DataUpload.CHUNK_SIZE);
        return new DataUpload(uri, content, numberOfChunks, override, config);
    }

    public async execute(client: GaiaStreamClient): Promise<DataRef> {
        const initResponse: BinaryWriteInitiatedImpulse = await client.post(new InitBinaryWriteImpulse(this.uri, this.override), '/data/sink/init');
        const chunkResponsesIds: string[] = await this.getChunkRequestsAndSendChunks(initResponse.uploadId, client);
        return client.post(new CompleteBinaryWriteImpulse(this.uri, initResponse.uploadId, chunkResponsesIds), '/data/sink/complete')
            .then(() => new DataRef(this.uri, client), (reason) => {
                    throw new Error('Upload to uri ' + this.uri + ' failed: ' + reason.stack);
                }
            );
    }

    private async getChunkRequestsAndSendChunks(uploadId: string, client: GaiaStreamClient): Promise<string[]> {
        const chunkResponsesIds = Array<string>();
        for (let index = 0; index < this.totalNumberOfChunks; index++) {
            const chunk: Blob = this.content.slice(DataUpload.CHUNK_SIZE * index, Math.min(DataUpload.CHUNK_SIZE * (index + 1), this.content.size));
            const binaryWriteChunkImpulse = new BinaryWriteChunkImpulse(this.uri, uploadId, index + 1, chunk.size, chunk);
            const data: Blob | Buffer = await binaryWriteChunkImpulse.data();
            const chunkResponse: BinaryChunkWrittenImpulse = await client.postStream(data, binaryWriteChunkImpulse.requestParameters(), '/data/sink/chunk');
            if (this.config && this.config.onUploadProgress) {
                let progress = (100 * (index + 1)) / this.totalNumberOfChunks;
                this.config.onUploadProgress(Math.ceil(progress));
            }
            chunkResponsesIds.push(chunkResponse.chunkId);
        }
        return chunkResponsesIds;
    }
}

export interface DataRefRequestConfig {
    onUploadProgress?: (progress: number) => void;
}
