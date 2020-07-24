// @ts-ignore
import {ClientOptions, ITransporter} from "..";
import {UUID} from "../graphql/GaiaScalars";
import {HMACCredentials, JWTCredentials} from "../api/GaiaCredentials";
import {HMACTokenBuilder} from "./HMACTokenBuilder";
import axios from 'axios';
import EnhancedFormData from "form-data"


export class HttpTransporter implements ITransporter {

    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    transport<T>(options: ClientOptions, body: any, urlPostfix: String = ""): Promise<T> {
        let url = this.url + urlPostfix
        return new Promise<T>((resolve, reject) => {
            axios.post(url, JSON.stringify(body), {
                headers: {
                    'Content-Type': options.contentType,
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    Authorization: HttpTransporter.buildAuthorizationHeader(options, body)
                }
            })
                .then(response => resolve(JSON.stringify(response.data) as any))
                .catch(err => reject(Error(err + ": " + (err.response || {}).data)));
        });
    }

    transportFormData<T>(options: ClientOptions, body: EnhancedFormData, urlPostfix: String = ""): Promise<T> {
        let url = this.url + urlPostfix
        let headers = body.getHeaders()
        return new Promise<T>((resolve, reject) => {
            axios.post(url, body, {
                headers: {
                    ...headers,
                    'Accept': '*/*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                    Authorization: HttpTransporter.buildAuthorizationHeader(options.withContentType(headers["content-type"]), body.getBuffer()) // TODO: Buffer to string
                }
            })
                .then(response => resolve(JSON.stringify(response.data) as any))
                .catch(err => reject(Error(err + ": " +  (err.response || {}).data)));
        });
    }


    private static buildAuthorizationHeader(options: ClientOptions, payload: any): string {
        var credentials = options.credentials
        if (credentials == null) {
            throw new Error("Authorization Header cannot be generated because no credentials are set")
        }
        if (credentials instanceof HMACCredentials) {
            return new HMACTokenBuilder()
                .withClientOptions(options)
                .withTimestamp(Math.floor(Date.now() / 1000))
                .withNonce(UUID.randomUUID().toString())
                .withPayload(JSON.stringify(payload))
                .build()
        } else if (credentials instanceof JWTCredentials) {
            const jwt = options.credentials as JWTCredentials
            return "Bearer " + jwt.token
        } else {
            throw new Error("Authorization Header for credentials of type " + credentials.constructor + " cannot be generated")
        }

    }

}
