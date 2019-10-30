export class ClientOptions {
    apiKey?:string;
    apiSecret?:string;

    constructor(apiKey?:string, apiSecret?:string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }
}