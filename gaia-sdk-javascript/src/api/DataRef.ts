import {GaiaClient} from "..";
import {InitBinaryWriteImpulse} from "../graphql/request/input/InitBinaryWriteImpulse";
import {InitiatedBinaryWriteImpulse} from "../graphql/response/type/InitiatedBinaryWriteImpulse";

export class DataRef {
    private static readonly CHUNK_SIZE = 1024 * 1024 * 1024 * 5;
    private readonly client: GaiaClient;
    private readonly uri: string;

    constructor(uri: string, client: GaiaClient) {
        this.uri = uri;
        this.client = client;
    }

    public add(filename: string, content: ArrayBuffer, override = false):Promise<InitiatedBinaryWriteImpulse> {
        console.log("Add " + filename);
        console.log(content);
        console.log("To: " + this.uri);
        let completeUri = this.uri.endsWith("/") ? this.uri + filename : this.uri + "/" + filename;
        let numberOfChunks = Math.ceil(content.byteLength / DataRef.CHUNK_SIZE)
        let initiateWriteImpulse = new InitBinaryWriteImpulse(completeUri, numberOfChunks, content.byteLength, override)
        return this.client.post(initiateWriteImpulse, "sink/data/init")
    }

    public list() {
        console.log("List from " + this.uri);
    }

    public remove() {
        console.log("Remove: " + this.uri)
    }

    public asFile() {
        console.log("asFile")
    }

    public asStream() {
        console.log("asStream")
    }

    public append(dataToAppend: any) {
        console.log("Append: " + dataToAppend)
    }
}
