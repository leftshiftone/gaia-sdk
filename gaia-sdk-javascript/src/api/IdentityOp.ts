import {GaiaStreamClient} from "../graphql/GaiaStreamClient";
import {from, Observable} from "rxjs";
import {IdentitySourceRequestImpulse} from "../graphql/request/input/IdentitySourceRequestImpulse";
import {DataRef} from "./DataRef";
import {IdentityImportImpulse} from "../graphql/request/input/IdentityImportImpulse";
import {UUID} from "../graphql/GaiaScalars";
import {IIdentityImported} from "../graphql/response/type/IdentityImported";
import {mergeMap} from "rxjs/operators";

export class IdentityOp {
    private readonly client: GaiaStreamClient;

    constructor(client: GaiaStreamClient) {
        this.client = client;
    }

    public import(tenantId: string, identityName: string, content: Blob, override: boolean = false, identityId?: string): Observable<IIdentityImported> {
        const fileName = `${identityName}-${Date.now()}`;
        return new DataRef(`gaia://${tenantId}/identities/`, this.client)
            .add(fileName, content, override)
            .pipe(mergeMap(dataRef =>
                from(this.importIdentity(dataRef.getUri(), tenantId, identityName, override, identityId)
                    .catch(reason => { throw new Error('Identity Upload failed: ' + reason); }))
            ))
    }

    private importIdentity(uri: string, tenantId: string, identityName: string, override: boolean = false, identityId?: string): Promise<IIdentityImported> {
        return this.client.post(new IdentityImportImpulse(uri,
            tenantId,
            identityId || UUID.randomUUID().toString(),
            identityName,
            override),
            '/identity/import')
            .then((response) => {
                return {
                    partitionKey: response.partitionKey,
                    uri: response.uri
                }
            }, (reason) => {
                throw new Error('Identity Import failed: ' + reason);
            });
    }

    public export(identityId: string): Observable<Blob> {
        return from(this.client.postAndRetrieveBinary(new IdentitySourceRequestImpulse(identityId), '/identity/source')
            .catch((reason) => {
                throw new Error('Exporting identity with id ' + identityId + ' failed: ' + reason);
            }));
    }
}
