import Blob from "cross-blob"

export class BinaryWriteChunkImpulse {
    private readonly uri: string
    private readonly uploadId: string
    private readonly ordinal: number
    private readonly sizeInBytes: number
    private readonly chunk: Blob

    constructor(uri: string, uploadId: string, ordinal: number, sizeInBytes: number, chunk: Blob) {
        this.uri = uri;
        this.uploadId = uploadId;
        this.ordinal = ordinal;
        this.sizeInBytes = sizeInBytes;
        this.chunk = chunk;
    }

    public requestParameters(): any {
        return {
            "uploadId": this.uploadId,
            "ordinal": JSON.stringify(this.ordinal),
            "sizeInBytes": JSON.stringify(this.sizeInBytes),
            "uri": this.uri
        }
    }

    public async data(): Promise<Blob | Buffer> {
        if (typeof FormData !== 'undefined') {
            // browser
            return this.chunk;
        } else {
            // not browser
            // @ts-ignore
            return Buffer.from(await this.chunk.arrayBuffer());
        }
    }
}
