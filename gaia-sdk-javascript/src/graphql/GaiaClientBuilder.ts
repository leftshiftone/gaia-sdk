import {ClientOptions, HttpTransport, ITransporter} from '..';
import {GaiaClient} from './GaiaClient';
import {HMACCredentials} from "../api/GaiaCredentials";

export class GaiaClientBuilder {
    private transporter: ITransporter;
    private apiKey?: string;
    private secret?: string;

    private constructor(transporter: ITransporter) {
        this.transporter = transporter;
    }

    public static http(url: string) {
        return new GaiaClientBuilder(new HttpTransport(url));
    }

    public withApiKey(apiKey: string) {
        this.apiKey = apiKey;
        return this;
    }

    public withSecret(secret: string) {
        this.secret = secret;
        return this;
    }

    public build() {
        const options = new ClientOptions(new HMACCredentials(this.apiKey!, this.secret!));
        return new GaiaClient(options, this.transporter);
    }

}
