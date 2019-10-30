import {ITransporter} from '../api/ITransporter';
import {ClientOptions} from '../api/ClientOptions';
import {AtlasClient} from './AtlasClient';
import {HttpTransport} from '../api/HttpTransport';

// AUTOGENERATED CLASS. DO NOT MODIFY.
export class AtlasClientBuilder {
    private transporter: ITransporter;
    private apiKey?: string;
    private secret?: string;

    private constructor(transporter: ITransporter) {
        this.transporter = transporter;
    }

    public static http(url: string) {
        return new AtlasClientBuilder(new HttpTransport(url));
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
        const options = new ClientOptions(this.apiKey, this.secret);
        return new AtlasClient(options, this.transporter);
    }

}
