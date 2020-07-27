export interface GaiaCredentials {

}

export class HMACCredentials implements GaiaCredentials {
    apiKey:string;
    apiSecret:string;
    constructor(apiKey:string, apiSecret:string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret
    }
}

export class JWTCredentials implements GaiaCredentials {
    token:string;
    constructor(token:string) {
        this.token = token
    }
}

export class TBLCredentials implements GaiaCredentials {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}
