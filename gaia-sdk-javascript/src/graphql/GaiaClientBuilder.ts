//Class generated from template src/main/resources/template/javascript/ClientBuilderTemplate.vm

import {ClientOptions, HttpTransporter, ITransporter, GaiaCredentials} from '..';
import {GaiaClient} from './GaiaClient';

export class GaiaClientBuilder {
    transporter: ITransporter;
    credentials?: GaiaCredentials;
    contentType: string = 'application/json';

    constructor(transporter: ITransporter) {
        this.transporter = transporter;
    }

    public static http(url: string) {
        return new GaiaClientBuilder(new HttpTransporter(url));
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
        return new GaiaClient(options, this.transporter);
    }

}
