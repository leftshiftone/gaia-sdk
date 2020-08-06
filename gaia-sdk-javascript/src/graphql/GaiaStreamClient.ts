import {ClientOptions} from '../api/ClientOptions';
import {ITransporter} from '../api/ITransporter';
import {Query} from "./request/type/Query";
import {Mutation} from "./request/type/Mutation";
import {Subscription} from "./request/type/Subscription";
import {QueryResponse} from './GaiaResponse';
import {MutationResponse} from './GaiaResponse';
import {SubscriptionResponse} from './GaiaResponse';
import VariableRegistry from "../api/VariableRegistry";
import {IStreamTransporter} from "../api/IStreamTransporter";

export class GaiaStreamClient {
    private readonly options: ClientOptions;
    private readonly transporter: IStreamTransporter;

    constructor(options: ClientOptions, transporter: IStreamTransporter) {
        this.options = options;
        this.transporter = transporter;
    }

    public post(body: any, urlPostfix: string = "", contentType?: string): Promise<any> {
        if (contentType) {
            this.options.withContentType(contentType);
        }
        return this.transporter.transport(this.options, JSON.stringify(body), urlPostfix)
    }

    public postFormData(body: any, urlPostfix: string=""): Promise<any> {
        return this.transporter.transport(this.options, body, urlPostfix)

    }

    public postAndRetrieveBinary(body: any, urlPostfix: string=""): Promise<any> {
        return this.transporter.transportAndRetrieveBinary(this.options, body, urlPostfix)
    }
}

export type Struct = Record<string, any>
export type ISO8601 = string
export type Uuid = string
