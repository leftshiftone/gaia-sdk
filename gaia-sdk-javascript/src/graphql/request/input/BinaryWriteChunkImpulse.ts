export class BinaryWriteChunkImpulse {
    private uri: string
    private uploadId: string
    private ordinal: number
    private sizeInBytes: number
    private file: ArrayBuffer


    constructor(uri: string, uploadId: string, ordinal: number, sizeInBytes: number, file: ArrayBuffer) {
        this.uri = uri;
        this.uploadId = uploadId;
        this.ordinal = ordinal;
        this.sizeInBytes = sizeInBytes;
        this.file = file;
    }
}
