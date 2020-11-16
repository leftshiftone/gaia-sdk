import {GaiaStreamClient} from "../graphql/GaiaStreamClient";
import {Observable} from "rxjs";

export class IdentityOp {
    private readonly client: GaiaStreamClient;

    constructor(client: GaiaStreamClient) {
        this.client = client;
    }

    public import(): Observable<Blob> | undefined {
        console.log("TODO: implement import identity");
        return undefined;
    }
}
