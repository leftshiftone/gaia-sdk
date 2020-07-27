import {GaiaClient} from "..";
import {InitBinaryWriteImpulse} from "../graphql/request/input/InitBinaryWriteImpulse";
import {BinaryWriteInitiatedImpulse} from "../graphql/response/type/BinaryWriteInitiatedImpulse";
import {CompleteBinaryWriteImpulse} from "../graphql/request/input/CompleteBinaryWriteImpulse";
import {BinaryWriteChunkImpulse} from "../graphql/request/input/BinaryWriteChunkImpulse";
import {BinaryChunkWrittenImpulse} from "../graphql/response/type/BinaryChunkWrittenImpulse";
import {from, Observable} from "rxjs";

export class DataRef {
    private readonly client: GaiaClient;
    private readonly uri: string;

    constructor(uri: string, client: GaiaClient) {
        this.uri = uri;
        this.client = client;
    }

    public add(fileName: string, content: Buffer, override: boolean = false): Observable<DataRef | null> {
        console.log("Add " + fileName);
        console.log(content);
        console.log("To: " + this.uri);
        let upload = DataUpload.create(this.uri, fileName, content, override)
        return from(upload.execute(this.client))
    }


    public list() {
        console.log("List from " + this.uri);
    }

    public remove() {
        console.log("Remove: " + this.uri)
    }

    public asFile() {
        return this.client.post({uri: this.uri}, "/source/data/get");
    }

    public asStream() {
        console.log("asStream")
    }

    public append(dataToAppend: any) {
        console.log("Append: " + dataToAppend)
    }
}

class DataUpload {
    private static readonly CHUNK_SIZE = 1024 * 1024 * 1024 * 5;
    private readonly uri: string;
    private readonly content: Buffer;
    private readonly totalNumberOfChunks: number;
    private readonly override: boolean;


    constructor(uri: string, content: Buffer, totalNumberOfChunks: number, override: boolean) {
        this.uri = uri;
        this.content = content;
        this.totalNumberOfChunks = totalNumberOfChunks;
        this.override = override;
    }

    public static create(baseUri: string, fileName: string, content: Buffer, override: boolean = false): DataUpload {
        let numberOfChunks = Math.ceil(content.byteLength / DataUpload.CHUNK_SIZE)
        let completeUri = baseUri.endsWith("/") ? baseUri + fileName : baseUri + "/" + fileName;
        return new DataUpload(completeUri, content, numberOfChunks, override)
    }

    public execute(client: GaiaClient): Promise<DataRef | null> {
        return client.post(new InitBinaryWriteImpulse(this.uri, this.totalNumberOfChunks, this.content.byteLength, this.override), "/sink/data/init")
            .then((initResponse: BinaryWriteInitiatedImpulse) =>
                Promise.all(this.getChunkRequests(initResponse.uploadId)
                    .map(chunkRequest => client.postFormData(chunkRequest.asFormData(), "/sink/data/chunk"))))
            .then((chunkResponses: BinaryChunkWrittenImpulse[]) => {
                let chunkIds = chunkResponses.map(r => r.chunkId)
                return client.post(new CompleteBinaryWriteImpulse(this.uri, chunkResponses[0].uploadId, chunkIds), "/sink/data/complete")
            }).then(() => new DataRef(this.uri, client), reason => {
                console.log("Upload to uri " + this.uri + " failed. Reason: " + reason)
                return null
            })
    }

    private getChunkRequests(uploadId: string): BinaryWriteChunkImpulse[] {
        let chunks = new Array<Buffer>()
        for (let index = 0; index < this.totalNumberOfChunks; index++) {
            chunks.push(this.content.slice(DataUpload.CHUNK_SIZE * index, Math.min(DataUpload.CHUNK_SIZE * (index + 1), this.content.byteLength)))
        }
        return chunks.map((chunk, index) => new BinaryWriteChunkImpulse(this.uri, uploadId, index + 1, chunk.length, chunk))
    }
}
