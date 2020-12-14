import {GaiaStreamClient} from "../graphql/GaiaStreamClient";
import {from, Observable} from "rxjs";
import {IdentitySourceRequestImpulse} from "../graphql/request/input/IdentitySourceRequestImpulse";
import {DataRef, DataUpload} from "./DataRef";
import {IdentityImportImpulse} from "../graphql/request/input/IdentityImportImpulse";
import {UUID} from "../graphql/GaiaScalars";

export class IdentityOp {
    private readonly client: GaiaStreamClient;

    constructor(client: GaiaStreamClient) {
        this.client = client;
    }

    public import(tenantId: string, identityName: string, content: Blob, override: boolean = false, identityId?: string): Observable<DataRef> {
        let file = content as File;

        if (!file.name) {
            throw new Error('Import identity failed: Selected file is not a valid identity');
        }

        const uri = DataRef.concatUri(`gaia://${tenantId}/identities/`, identityName);
        const upload = DataUpload.create(uri, content, override);
        return from(upload.execute(this.client).then(result => {
            return this.importIdentity(uri, tenantId, identityName, override, identityId);
        }).catch(reason => {
            throw new Error('Identity Upload failed: ' + reason);
        }))
    }

    private importIdentity(uri: string, tenantId: string, identityName: string, override: boolean = false, identityId?: string): Promise<any> {
        return this.client.post(new IdentityImportImpulse(uri,
            tenantId,
            identityId || UUID.randomUUID().toString(),
            identityName,
            override),
            '/identity/import')
            .then(() => new DataRef(uri, this.client), (reason) => {
                    throw new Error('Identity Import failed: ' + reason);
                }
            );
    }

    public export(identityId: string): Observable<Blob> {
        return from(this.client.postAndRetrieveBinary(new IdentitySourceRequestImpulse(identityId), '/identity/source')
            .catch((reason) => {
                throw new Error('Exporting identity with id ' + identityId + ' failed: ' + reason);
            }));
    }
}
