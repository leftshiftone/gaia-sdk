import {GaiaStreamClient} from "../graphql/GaiaStreamClient";
import {from, Observable} from "rxjs";
import {IdentitySourceRequestImpulse} from "../graphql/request/input/IdentitySourceRequestImpulse";

export class IdentityOp {
    private readonly client: GaiaStreamClient;

    constructor(client: GaiaStreamClient) {
        this.client = client;
    }

    public import(identityId?: string): Observable<Blob> | undefined {
        console.log("TODO: implement import identity");
        return undefined;
    }

    public export(identityId: string): Observable<Blob> {
        return from(this.client.postAndRetrieveBinary(new IdentitySourceRequestImpulse(identityId), '/identity/source')
            .catch((reason) => {
                throw new Error('Exporting identity with id ' + identityId + ' failed: ' + reason);
            }));
    }
}
