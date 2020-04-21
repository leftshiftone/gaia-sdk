import {ClientOptions} from '../api/ClientOptions';
import {ITransporter} from '../api/ITransporter';
import Query from "./request/type/Query";
import Mutation from "./request/type/Mutation";
import Subscription from "./request/type/Subscription";
import {QueryResponse} from './GaiaResponse';
import {MutationResponse} from './GaiaResponse';
import {SubscriptionResponse} from './GaiaResponse';
import VariableRegistry from "../api/VariableRegistry";

export class GaiaClient {
    private readonly options: ClientOptions;
    private readonly transporter: ITransporter;

    constructor(options: ClientOptions, transporter: ITransporter) {
        this.options = options;
        this.transporter = transporter;
    }

    public queryNative(statement: string, variables: Record<string, any> = {}):Promise<QueryResponse> {
        const body = {statement, variables};
        return this.transporter.transport(this.options, body);
    }

    public query(request: Query): Promise<QueryResponse> {
        const [statement, variables] = this.getStatement("query", request);
        return this.queryNative(statement, variables);
    }

    public mutationNative(statement: string, variables: Record<string, any> = {}): Promise<MutationResponse> {
        const body = {statement, variables};
        return this.transporter.transport(this.options, body);
    }

    public mutation(request: Mutation): Promise<MutationResponse> {
        const [statement, variables] = this.getStatement("mutation", request);
        return this.mutationNative(statement, variables);
    }

    public subscriptionNative(statement: string, variables: Record<string, any> = {}):Promise<SubscriptionResponse> {
        const body = {statement, variables};
        return this.transporter.transport(this.options, body);
    }

    public subscription(request: Subscription): Promise<SubscriptionResponse> {
        const [statement, variables] = this.getStatement("subscription", request);
        return this.subscriptionNative(statement, variables);
    }


    private getStatement(name: string, type: Array<(_:VariableRegistry) => string>):[string, {}] {
        const registry = new VariableRegistry();
        const fields = type.map(e => e(registry)).join(" ");

        if (registry.getDatatypes().length == 0) {
            const statement = `${name} gaia { ${fields} }`;
            return [statement, registry.getVariables()];
        }
        const statement = `${name} gaia(${registry.getDatatypes().join(", ")}) { ${fields} }`;
        return [statement, registry.getVariables()];
    }

}

export type Struct = Record<string, any>
export type Long = String
export type Timestamp = String
export type Uuid = String
