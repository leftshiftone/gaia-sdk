import {from, Observable} from "rxjs";
import {GaiaStreamClient} from "../graphql/GaiaStreamClient";

export class SkillRef {
    private readonly client: GaiaStreamClient;
    private readonly uri: string;

    constructor(uri: string, client: GaiaStreamClient) {
        this.uri = uri;
        this.client = client;
    }

    public start(): Observable<undefined> {
        return from(this.client.post({ "uri": this.uri }, "/control/skill-provision/start", "application/json"))
    }

    public stop(): Observable<undefined> {
        return from(this.client.post({ "uri": this.uri }, "/control/skill-provision/stop", "application/json"))
    }

    public status(): Observable<SkillProvisionStatus> {
        return from(this.client.post({ "uri": this.uri }, "/control/skill-provision/status", "application/json"))
    }

    public logs(): Observable<string> {
        // TODO convert list to separte items
        return from(this.client.post({ "uri": this.uri }, "/control/skill-provision/logs", "application/json"))
    }
}

export class SkillProvisionStatus {
    name: string;
    status: string;
    createdAt: string;

    constructor(name: string, status: string, createdAt: string) {
        this.name = name;
        this.status = status
        this.createdAt = createdAt
    }
}
