export interface BinaryChunkWrittenImpulse {
    uploadId: string;
    chunkId: string;
    ordinal: number;
    sizeInBytes: number;
}
