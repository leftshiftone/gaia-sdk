import {GaiaCredentials} from "./GaiaCredentials";

export class ClientOptions {
    credentials?: GaiaCredentials;
    contentType:string;
    constructor(credentials: GaiaCredentials, contentType: string) {
        this.credentials = credentials;
        this.contentType = contentType
    }
}
