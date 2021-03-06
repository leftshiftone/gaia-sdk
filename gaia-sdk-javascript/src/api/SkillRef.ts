import {defer, Observable} from 'rxjs';
import {GaiaStreamClient} from '../graphql/GaiaStreamClient';
import {flatMap, map} from 'rxjs/operators';

export class SkillRef {
    private readonly client: GaiaStreamClient;
    private readonly uri: string;

    constructor(uri: string, client: GaiaStreamClient) {
        this.uri = uri;
        this.client = client;
    }

    public start(): Observable<{}> {
        return defer(() => this.client.post({uri: this.uri}, '/skill/start'));
    }

    public stop(): Observable<{}> {
        return defer(() => this.client.post({uri: this.uri}, '/skill/stop'));
    }

    public logs(numberOfLines?: number): Observable<string> {
        return this.logsInternal(numberOfLines)
            .pipe(flatMap(response => defer(() => response.logLines)));
    }

    private logsInternal(numberOfLines?: number): Observable<SkillProvisionLogs> {
        return defer(() => this.client.post({uri: this.uri, numberOfLines: numberOfLines}, '/skill/logs'));
    }

    public build(): Observable<SkillProvisionBuildResponse> {
        return defer(() => this.client.post({uri: this.uri}, '/skill/build'));
    }

    public evaluate(contract: string, payload: any): Observable<SkillEvaluation>;
    public evaluate(payload: any): Observable<SkillEvaluation>;
    public evaluate(first: any, second?: any): Observable<SkillEvaluation> {
        if (typeof first === 'string' && second !== undefined) {
            //corresponds to evaluate(contract, payload)
            return this.doEvaluate(first, second);
        }
        if (typeof first !== 'string' && second === undefined) {
            // corresponds to evaluate(payload)
            return this.doEvaluate(undefined, first);
        }
        throw new Error('Either use evaluate(contract:string, payload:{}) or evaluate(payload: {})');
    }

    private doEvaluate(contract: string | undefined, p: any):  Observable<SkillEvaluation> {
        if (!p) throw new Error('You must provide a payload');
        const request = {uri: this.uri, payload: p};
        if (contract) {
            request['contract'] = contract;
        }
        return defer(() => this.client.post(request, '/skill/evaluate'))
            .pipe(map(r => new SkillEvaluation(r)));
    }
}

export class SkillProvisionBuildResponse {
    reference: string;

    constructor(reference: string) {
        this.reference = reference;
    }
}
export class SkillProvisionStatus {
    name: string;
    status: string;
    createdAt: string;

    constructor(name: string, status: string, createdAt: string) {
        this.name = name;
        this.status = status;
        this.createdAt = createdAt;
    }
}

export class SkillProvisionLogs {
    logLines: [string];

    constructor(logLines: [string]) {
        this.logLines = logLines;
    }
}

export class SkillEvaluation {

    private readonly _response: any;

    constructor(payload: any) {
        this.response = payload;
    }

    response(): any {
        return this._response;
    }
}

