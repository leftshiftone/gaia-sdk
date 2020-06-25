// @ts-ignore
import {ClientOptions, ITransporter} from "..";
import {UUID} from "../graphql/GaiaScalars";
import {HMACCredentials, JWTCredentials} from "../api/GaiaCredentials";
import {HMACTokenBuilder} from "./HMACTokenBuilder";

export class HttpTransport implements ITransporter {

    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    transport<T>(options: ClientOptions, body: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open("post", this.url);
            request.setRequestHeader("Content-Type", options.contentType);
            request.setRequestHeader('Access-Control-Allow-Credentials', 'true');
            request.setRequestHeader('Access-Control-Allow-Methods', 'POST');
            request.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');
            request.setRequestHeader("Authorization", HttpTransport.buildAuthorizationHeader(options, body));

            request.withCredentials = true;
            request.timeout = 10000;

            request.onload = () => {
                if (request.status == 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.onerror = () => {
                reject(Error("network error"));
            };
            request.ontimeout = () => {
                reject(Error("timeout"));
            };

            request.send(JSON.stringify(body));
        });
    }

    private static buildAuthorizationHeader(options: ClientOptions, payload: any): string {
        var credentials= options.credentials
        if (credentials==null){
            throw new Error("Authorization Header cannot be generated because no credentials are set")
        }
        if(credentials instanceof HMACCredentials){
            return new HMACTokenBuilder()
                .withClientOptions(options)
                .withTimestamp( Math.floor(Date.now() / 1000))
                .withNonce(UUID.randomUUID().toString())
                .withPayload(JSON.stringify(payload))
                .build()
        }else if (credentials instanceof JWTCredentials){
            const jwt = options.credentials as JWTCredentials
            return  "Bearer " + jwt.token
        }else {
            throw new Error("Authorization Header for credentials of type "+ credentials.constructor+" cannot be generated")
        }

    }

}
