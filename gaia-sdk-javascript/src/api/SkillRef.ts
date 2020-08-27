import {from, Observable} from "rxjs";
import {GaiaStreamClient} from "../graphql/GaiaStreamClient";
import {flatMap} from "rxjs/operators";

export class SkillRef {
    private readonly client: GaiaStreamClient;
    private readonly uri: string;

    constructor(uri: string, client: GaiaStreamClient) {
        this.uri = uri;
        this.client = client;
    }

    public start(): Observable<{}> {
        return from(this.client.post({ "uri": this.uri }, "/skill/start"))
    }

    public stop(): Observable<{}> {
        return from(this.client.post({ "uri": this.uri }, "/skill/stop"))
    }

    public status(): Observable<SkillProvisionStatus> {
        return from(this.client.post({ "uri": this.uri }, "/skill/status"))
    }

    public logs(numberOfLines?: number): Observable<string> {
        return this.logsInternal(numberOfLines)
            .pipe(flatMap(response => from(response.logLines)))
    }

    private logsInternal(numberOfLines?: number): Observable<SkillProvisionLogs> {
        return from(this.client.post({ "uri": this.uri, "numberOfLines": numberOfLines }, "/skill/logs"))
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

export class SkillProvisionLogs {
    logLines: [string];

    constructor(logLines: [string]) {
        this.logLines = logLines;
    }
}
