// @ts-ignore
import {ClientOptions, ITransporter} from "..";
import {UUID} from "../graphql/GaiaScalars";
import {HMACCredentials, JWTCredentials} from "..";
import {HMACTokenBuilder} from "./HMACTokenBuilder";
import axios, {AxiosRequestConfig} from 'axios';
import Blob from 'cross-blob'

export class HttpTransporter implements ITransporter {

    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    private post<T>(body: any, config: AxiosRequestConfig, urlPostfix: String = ""): Promise<T> {
        let url = this.url + urlPostfix
        config.headers = {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            ...(config.headers || {})
        }
        return axios.post(url, body, config)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err + ": " + (err.response || {}).data)
            })
    }

    transport<T>(options: ClientOptions, body: any, urlPostfix: string = ""): Promise<T> {
        return this.post(JSON.stringify(body), {
            headers: {
                'Content-Type': options.contentType,
                Authorization: HttpTransporter.buildAuthorizationHeader(options, body)
            }
        }, urlPostfix)
            .then(response => JSON.stringify(response) as any)
    }

    downloadBlob(options: ClientOptions, body: any, urlPostfix: string = ""): Promise<Blob> {
        return this.post(JSON.stringify(body), {
            headers: {
                'Content-Type': options.contentType,
                Authorization: HttpTransporter.buildAuthorizationHeader(options, body)
            },
            responseType: "arraybuffer"
        }, urlPostfix)
            .then(data => new Blob([data as BlobPart]))
    }

    transportFormData<T>(options: ClientOptions, body: FormData, urlPostfix: string = ""): Promise<T> {
        return this.post(body, {
            headers: {
                Authorization: HttpTransporter.buildAuthorizationHeader(options, body)
            }
        }, urlPostfix)
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
