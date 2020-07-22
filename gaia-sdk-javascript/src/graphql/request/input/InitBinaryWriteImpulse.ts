export class InitBinaryWriteImpulse {
    private uri: string;
    private totalNumberOfChunks: number;
    private totalSizeInBytes: number;
    private override: boolean;

    constructor(uri: string, totalNumberOfChunks: number, totalSizeInBytes: number, override: boolean) {
        this.uri = uri;
        this.totalNumberOfChunks = totalNumberOfChunks;
        this.totalSizeInBytes = totalSizeInBytes;
        this.override = override;
    }
}
