import {ClientOptions, FunctionHttpTransporter, IFunctionTransporter} from '..';
import {GaiaFunctionClient} from './GaiaFunctionClient';
import {GaiaCredentials} from "../api/GaiaCredentials";
import {HttpClient} from "../http/HttpClient";

//Class generated from template src/main/resources/template/javascript/ClientBuilderTemplate.vm

export class GaiaFunctionClientBuilder {
    private transporter: IFunctionTransporter;
    private credentials?: GaiaCredentials
    private contentType: string = "application/json"

    private constructor(transporter: IFunctionTransporter) {
        this.transporter = transporter;
    }

    public static http(url: string) {
        return new GaiaFunctionClientBuilder(new FunctionHttpTransporter(url));
    }

    public withCredentials(credentials: GaiaCredentials) {
        this.credentials=credentials
        return this;
    }

    public withContentType(contentType: string) {
        this.contentType = contentType
        return this;
    }

    public build() {
        const options = new ClientOptions(this.credentials!,this.contentType);
        return new GaiaFunctionClient(options, this.transporter);
    }

}
