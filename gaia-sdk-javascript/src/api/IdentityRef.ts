import {GaiaStreamClient} from "../graphql/GaiaStreamClient";
import {from, Observable} from "rxjs";
import {IdentitySourceRequestImpulse} from "../graphql/request/input/IdentitySourceRequestImpulse";

export class IdentityRef {
    private readonly client: GaiaStreamClient;
    private readonly identityId: string;

    constructor(identityId: string, client: GaiaStreamClient) {
        this.identityId = identityId;
        this.client = client;
    }

    public export(): Observable<Blob> {
        return from(this.client.postAndRetrieveBinary(new IdentitySourceRequestImpulse(this.identityId), '/identity/source')
            .catch((reason) => {
                throw new Error('Exporting identity with id ' + this.identityId + ' failed: ' + reason);
            }));
    }
}
