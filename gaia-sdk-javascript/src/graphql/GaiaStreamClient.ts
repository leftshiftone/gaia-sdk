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

    public postStream(data: any, requestParameters: any, urlPostfix: string=""): Promise<any> {
        var requestOptions = this.options
            .withContentType("application/octet-stream")
            .withRequestParameters(requestParameters);
        return this.transporter.transport(requestOptions, data, urlPostfix)

    }

    public postAndRetrieveBinary(body: any, urlPostfix: string=""): Promise<any> {
        return this.transporter.transportAndRetrieveBinary(this.options, body, urlPostfix)
    }
}
