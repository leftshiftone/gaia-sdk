import {GaiaCredentials} from "./GaiaCredentials";

export class ClientOptions {
    credentials: GaiaCredentials;
    contentType: string;

    constructor(credentials: GaiaCredentials, contentType: string = "application/json") {
        this.credentials = credentials;
        this.contentType = contentType
    }

    public withContentType(contentType: string) {
        return new ClientOptions(this.credentials, contentType)
    }
}
