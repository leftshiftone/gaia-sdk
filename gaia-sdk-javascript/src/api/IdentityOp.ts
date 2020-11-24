import {GaiaStreamClient} from "../graphql/GaiaStreamClient";
import {from, Observable} from "rxjs";
import {IdentitySourceRequestImpulse} from "../graphql/request/input/IdentitySourceRequestImpulse";
import {InitBinaryWriteImpulse} from "../graphql/request/input/InitBinaryWriteImpulse";
import {BinaryWriteChunkImpulse} from "../graphql/request/input/BinaryWriteChunkImpulse";
import {DataRef, DataUpload} from "./DataRef";
import {CompleteIdentityUploadImpulse} from "../graphql/request/input/CompleteIdentityUploadImpulse";
import {UUID} from "../graphql/GaiaScalars";

export class IdentityOp {
    private readonly client: GaiaStreamClient;

    constructor(client: GaiaStreamClient) {
        this.client = client;
    }

    public import(tenantId: string, identityName: string, content: Blob, override: boolean = false, identityId?: string): Observable<DataRef> {
        // As long as the gaia uri is "gaia://user@tenant..." we have to send the uri as well because of the "user"
        // TODO: remove user

        let file = content as File;

        if (!file.name) {
            throw new Error('Import identity failed: Selected file is not a valid identity');
        }

        const uri = `gaia://user@${tenantId}/identities/`;
        const upload = IdentityUpload.createIdentityUpload(DataRef.concatUri(uri, file.name),
                                        tenantId,
                                        identityId || UUID.randomUUID().toString(),
                                        identityName,
                                        content,
                                        override);
        return from(upload.executeIdentityUpload(this.client));
    }

    public export(identityId: string): Observable<Blob> {
        return from(this.client.postAndRetrieveBinary(new IdentitySourceRequestImpulse(identityId), '/identity/source')
            .catch((reason) => {
                throw new Error('Exporting identity with id ' + identityId + ' failed: ' + reason);
            }));
    }
}

class IdentityUpload extends DataUpload {
    private readonly tenantId: string;
    private readonly identityId: string;
    private readonly identityName: string;

    constructor(uri: string, tenantId: string, identityId: string, identityName: string, content: Blob, totalNumberOfChunks: number, override: boolean) {
        super(uri, content, totalNumberOfChunks, override);
        this.tenantId = tenantId;
        this.identityId = identityId;
        this.identityName = identityName;
    }

    public static createIdentityUpload(uri: string, tenantId: string, identityId: string, identityName: string, content: Blob, override: boolean = false): IdentityUpload {
        const numberOfChunks = Math.ceil(content.size / IdentityUpload.CHUNK_SIZE);
        return new IdentityUpload(uri, tenantId, identityId, identityName, content, numberOfChunks, override);
    }

    private async sendIdentityChunks(uploadId: string, client: GaiaStreamClient) {
        return await Promise.all(
            this.getIdentityChunkRequests(uploadId)
                .map(chunk => chunk.data().then(data => client.postStream(data, chunk.requestParameters(), '/identity/sink/chunk')))
        );
    }

    public async executeIdentityUpload(client: GaiaStreamClient): Promise<DataRef> {
        const initResponse = await client.post(new InitBinaryWriteImpulse(this.uri, this.totalNumberOfChunks, this.content.size, this.override), '/identity/sink/init');
        const chunkResponses = await this.sendIdentityChunks(initResponse.uploadId, client);
        const chunkIds = chunkResponses.map(r => r.chunkId);
        return client.post(new CompleteIdentityUploadImpulse(this.uri, this.tenantId, this.identityId, this.identityName, chunkResponses[0].uploadId, chunkIds, this.override), '/identity/sink/complete')
            .then(() => new DataRef(this.uri, client), (reason) => {
                    throw new Error('Upload to uri ' + this.uri + ' failed: ' + reason.stack);
                }
            );
    }

    private getIdentityChunkRequests(uploadId: string): BinaryWriteChunkImpulse[] {
        const chunks = new Array<Blob>();
        for (let index = 0; index < this.totalNumberOfChunks; index++) {
            chunks.push(this.content.slice(IdentityUpload.CHUNK_SIZE * index, Math.min(IdentityUpload.CHUNK_SIZE * (index + 1), this.content.size)));
        }
        return chunks.map((chunk, index) => new BinaryWriteChunkImpulse(this.uri, uploadId, index + 1, chunk.size, chunk));
    }
}

