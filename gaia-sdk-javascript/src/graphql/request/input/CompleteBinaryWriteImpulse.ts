export class CompleteBinaryWriteImpulse {
    private uri: string;
    private uploadId: string;
    private chunks: Array<string>;

    constructor(uri: string, uploadId: string, chunks: Array<string>) {
        this.uri = uri;
        this.uploadId = uploadId;
        this.chunks = chunks;
    }
}
