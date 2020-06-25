import {ClientOptions, HttpTransporter, ITransporter} from '..';
import {GaiaClient} from './GaiaClient';
import {GaiaCredentials} from "../api/GaiaCredentials";

export class GaiaClientBuilder {
    private transporter: ITransporter;
    private credentials?: GaiaCredentials
    private contentType: string = "application/json"

    private constructor(transporter: ITransporter) {
        this.transporter = transporter;
    }

    public static http(url: string) {
        return new GaiaClientBuilder(new HttpTransporter(url));
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
        return new GaiaClient(options, this.transporter);
    }

}
