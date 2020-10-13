import {HMACTokenBuilder} from "../http/HMACTokenBuilder";
import {UUID} from "../graphql/GaiaScalars";
import {ClientOptions} from "./ClientOptions";

export interface GaiaCredentials {
    createAuthHeader(options: ClientOptions, payload: string): Promise<string>
}

export class HMACCredentials implements GaiaCredentials {
    apiKey:string;
    apiSecret:string;
    constructor(apiKey:string, apiSecret:string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret
    }

    async createAuthHeader(options: ClientOptions, payload: any): Promise<string> {
        return await new HMACTokenBuilder()
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

    async createAuthHeader(options: ClientOptions, payload: string): Promise<string> {
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

    async createAuthHeader(options: ClientOptions, payload: string): Promise<string> {
        throw new Error("Authorization Header for credentials of type " + this.constructor + " cannot be generated")
    }
}
