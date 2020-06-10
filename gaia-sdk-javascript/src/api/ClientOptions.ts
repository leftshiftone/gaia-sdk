export class ClientOptions {
    apiKey?:string;
    apiSecret?:string;
    contentType:string;

    constructor(apiKey?:string, apiSecret?:string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.contentType = "application/json"
    }
}
