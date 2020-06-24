// @ts-ignore
import * as CryptoJS from 'crypto-js';
import {ClientOptions, ITransporter} from "..";
import {UUID} from "../graphql/GaiaScalars";
import {HMacCredentials} from "../api/GaiaCredentials";

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
            request.setRequestHeader("Authorization", HttpTransport.hmacHeader(options, body));

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

    private static hmacHeader(options: ClientOptions, payload: any): string {
        const timestamp = Math.floor(Date.now() / 1000); //todo: check if this is a UTC timestamp
        const nonce = UUID.randomUUID().toString();
        const payloadAsString = JSON.stringify(payload);
        const token = this.buildHmacHeader(options,payloadAsString,timestamp,nonce)
        return token

    }
    /**
     * Authorization: "HMAC-SHA512 " + API_KEY + "_" +
     * base64(hmac-sha512( content, content_type, sensor_type, timestamp, nonce )) + "_" + timestamp + "_" + nonce
     */
    static buildHmacHeader(options: ClientOptions, payloadAsString: string, timestamp: number, nonce: string): string {
        var credentials = options.credentials as HMacCredentials
        const sep = "_"
        const HTTP_SENSOR_TYPE = "http"

        const base64EncodedPayload= btoa(payloadAsString)
        let prepareToHash = [base64EncodedPayload,options.contentType,HTTP_SENSOR_TYPE,timestamp,nonce].join(sep)
        const hmac = CryptoJS.HmacSHA512(Buffer.from(prepareToHash).toString(),credentials.apiSecret).toString()
        const signature = btoa(hmac);

        return "HMAC-SHA512 " + [credentials.apiKey,signature,timestamp,nonce].join(sep)

    }



}
