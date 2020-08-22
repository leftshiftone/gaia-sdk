import {GaiaCredentials} from "..";
import {DataRef} from "../api/DataRef";
import {GaiaStreamClient} from "../graphql/GaiaStreamClient";
import {GaiaStreamClientBuilder} from "../graphql/GaiaStreamClientBuilder";
import {ISensorStream} from "../api/ISensorStream";

export class HttpSensorStream implements ISensorStream{
    private readonly client: GaiaStreamClient;

    constructor(url: string, credentials: GaiaCredentials) {
        this.client = GaiaStreamClientBuilder.http(url + "/api/async/stream")
            .withCredentials(credentials)
            .build()
    }

    data(uri: string): DataRef {
        console.log("Create DataRef");
        return new DataRef(uri, this.client);
    }
}
