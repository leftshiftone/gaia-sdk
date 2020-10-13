import {GaiaCredentials} from "./GaiaCredentials";

export class ClientOptions {
    credentials: GaiaCredentials;
    contentType: string;
    requestParameters?: any;

    constructor(credentials: GaiaCredentials, contentType: string = "application/json", requestParameters?: any) {
        this.credentials = credentials;
        this.contentType = contentType
        this.requestParameters = requestParameters
    }

    public withContentType(contentType: string) {
        return new ClientOptions(this.credentials, contentType, this.requestParameters)
    }

    public withRequestParameters(requestParameters: any) {
        return new ClientOptions(this.credentials, this.contentType, requestParameters)
    }
}
