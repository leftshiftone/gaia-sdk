import Blob from "cross-blob"
import {NodeFormData} from "../formdata/NodeFormData";
import {BrowserFormData} from "../formdata/BrowserFormData";

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

    public async asFormData(): Promise<any> {
        const formData = typeof FormData !== 'undefined' ?
            new BrowserFormData() :
            new NodeFormData()

        await formData.append("file", this.chunk, "anyFileName")
        await formData.append("uploadId", this.uploadId)
        await formData.append("ordinal", JSON.stringify(this.ordinal))
        await formData.append("sizeInBytes", JSON.stringify(this.sizeInBytes))
        await formData.append("uri", this.uri)

        return formData
    }
}
