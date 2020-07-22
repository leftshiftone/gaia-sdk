import {GaiaClient, GaiaClientBuilder} from "..";
import {GaiaCredentials} from "../api/GaiaCredentials";
import {DataRef} from "../api/DataRef";

export class HttpDataFunction {
    private readonly client: GaiaClient;

    constructor(url: string, credentials: GaiaCredentials) {
        this.client = GaiaClientBuilder.http(url + "/api/async/stream")
            .withCredentials(credentials)
            .build()
    }

    public createRef(path: string) {
        console.log("Create DataRef");
        return new DataRef(path, this.client);
    }
}
