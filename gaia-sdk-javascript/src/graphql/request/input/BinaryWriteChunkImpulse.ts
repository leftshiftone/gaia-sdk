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

    public asFormData(): FormData {
        let body = new FormData()
        body.append("file", this.chunk, "anyFileName")
        body.append("uploadId", this.uploadId)
        body.append("ordinal", JSON.stringify(this.ordinal))
        body.append("sizeInBytes", JSON.stringify(this.sizeInBytes))
        body.append("uri", this.uri)
        return body
    }
}
