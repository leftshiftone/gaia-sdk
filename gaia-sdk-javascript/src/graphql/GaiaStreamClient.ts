import {ClientOptions} from '../api/ClientOptions';
import {IStreamTransporter} from "../api/IStreamTransporter";

export class GaiaStreamClient {
    private readonly options: ClientOptions;
    private readonly transporter: IStreamTransporter;

    constructor(options: ClientOptions, transporter: IStreamTransporter) {
        this.options = options;
        this.transporter = transporter;
    }

    public post(body: any, urlPostfix: string = ""): Promise<any> {
        return this.transporter.transport(this.options, JSON.stringify(body), urlPostfix)
    }

    public postFormData(body: any, urlPostfix: string=""): Promise<any> {
        return this.transporter.transport(this.options, body, urlPostfix)

    }

    public postAndRetrieveBinary(body: any, urlPostfix: string=""): Promise<any> {
        return this.transporter.transportAndRetrieveBinary(this.options, body, urlPostfix)
    }
}
