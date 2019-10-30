import {ClientOptions} from '../api/ClientOptions';
import {ITransporter} from '../api/ITransporter';
import {RainQueryRequest} from './RainRequest';
import {RainQueryResponse} from './RainResponse';
import {RainMutationRequest} from './RainRequest';
import {RainMutationResponse} from './RainResponse';

// AUTOGENERATED CLASS. DO NOT MODIFY.
export class RainClient {
    private options: ClientOptions;
    private transporter: ITransporter;
    private nonce = Math.random();

    constructor(options: ClientOptions, transporter: ITransporter) {
        this.options = options;
        this.transporter = transporter;
    }

    public queryNative(statement: string, variables: Record<string, any> = {}, preprocessors: Array<string> = []): Promise<RainQueryResponse> {        this.nonce += 1;        const body = {            statement,            variables,            preprocessors,            timestamp: new Date().getTime(),            nonce: this.nonce,        };        return this.transporter.transport(this.options, body);    }
    public query(request: RainQueryRequest): Promise<RainQueryResponse> {
        const [statement, variables] = request.getStatement();
        return this.queryNative(statement, variables, request.preprocessors);
    }
    public mutationNative(statement: string, variables: Record<string, any> = {}, preprocessors: Array<string> = []): Promise<RainMutationResponse> {        this.nonce += 1;        const body = {            statement,            variables,            preprocessors,            timestamp: new Date().getTime(),            nonce: this.nonce,        };        return this.transporter.transport(this.options, body);    }
    public mutation(request: RainMutationRequest): Promise<RainMutationResponse> {
        const [statement, variables] = request.getStatement();
        return this.mutationNative(statement, variables, request.preprocessors);
    }

}
