import {GaiaClient, GaiaClientBuilder} from "..";
import {GaiaCredentials} from "..";
import {DataRef} from "../api/DataRef";
import {GaiaStreamClient} from "../graphql/GaiaStreamClient";
import {GaiaStreamClientBuilder} from "../graphql/GaiaStreamClientBuilder";
import {SkillRef} from "../api/SkillRef";

export class HttpSensorStream {
    private readonly client: GaiaStreamClient;

    constructor(url: string, credentials: GaiaCredentials) {
        this.client = GaiaStreamClientBuilder.http(url + "/api/async")
            .withCredentials(credentials)
            .build()
    }

    public createDataRef(path: string) {
        console.log("Create DataRef");
        return new DataRef(path, this.client);
    }

    public createSkillRef(skillUri: string) {
        return new SkillRef(skillUri, this.client);
    }
}

