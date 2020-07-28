import {HMACTokenBuilder} from "../http/HMACTokenBuilder";
import {UUID} from "../graphql/GaiaScalars";
import {ClientOptions} from "./ClientOptions";

export interface GaiaCredentials {
    createAuthorizationString(options: ClientOptions, payload: string): string
}

export class HMACCredentials implements GaiaCredentials {
    apiKey:string;
    apiSecret:string;
    constructor(apiKey:string, apiSecret:string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret
    }

    createAuthorizationString(options: ClientOptions, payload: string): string {
        return new HMACTokenBuilder()
            .withClientOptions(options)
            .withTimestamp(Math.floor(Date.now() / 1000))
            .withNonce(UUID.randomUUID().toString())
            .withPayload(payload)
            .build()
    }
}

export class JWTCredentials implements GaiaCredentials {
    token:string;
    constructor(token:string) {
        this.token = token
    }

    createAuthorizationString(options: ClientOptions, payload: string): string {
        return "Bearer " + this.token
    }
}

export class UsernamePasswordCredentials implements GaiaCredentials {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    createAuthorizationString(options: ClientOptions, payload: string): string {
        throw new Error("Authorization Header for credentials of type " + this.constructor + " cannot be generated")
    }
}
