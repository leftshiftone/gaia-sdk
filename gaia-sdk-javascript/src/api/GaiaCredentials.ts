export interface GaiaCredentials {

}

export class HMacCredentials implements GaiaCredentials {
    apiKey:string;
    apiSecret:string;
    constructor(apiKey:string, apiSecret:string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret
    }
}

export class JWTTokenCredentials implements GaiaCredentials {
    token:string;
    constructor(token:string) {
        this.token = token
    }
}
