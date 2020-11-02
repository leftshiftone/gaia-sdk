import {ClientOptions} from '..';
import {GaiaCredentials} from '../api/GaiaCredentials';
import {GaiaStreamClient} from './GaiaStreamClient';
import {StreamHttpTransporter} from '../http/StreamHttpTransporter';
import {IStreamTransporter} from '../api/IStreamTransporter';

export class GaiaStreamClientFactory {
    http(url: string) {
        return GaiaStreamClientBuilder.http(url);
    }
}

export class GaiaStreamClientBuilder {
    transporter: IStreamTransporter;
    credentials?: GaiaCredentials;
    contentType: string = 'application/json';

    constructor(transporter: IStreamTransporter) {
        this.transporter = transporter;
    }

    public static http(url: string) {
        return new GaiaStreamClientBuilder(new StreamHttpTransporter(url));
    }

    public withCredentials(credentials: GaiaCredentials) {
        this.credentials = credentials;
        return this;
    }

    public withContentType(contentType: string) {
        this.contentType = contentType;
        return this;
    }

    public build() {
        const options = new ClientOptions(this.credentials!, this.contentType);
        return new GaiaStreamClient(options, this.transporter);
    }

}
