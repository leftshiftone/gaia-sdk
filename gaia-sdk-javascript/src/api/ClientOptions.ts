import {GaiaCredentials} from "./GaiaCredentials";

export class ClientOptions {
    credentials?: GaiaCredentials;
    contentType:string;
//TODO add possibility to set contentType
    constructor(credentials: GaiaCredentials) {
        this.credentials = credentials;
        this.contentType = "application/json"
    }
}
