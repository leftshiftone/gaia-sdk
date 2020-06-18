// @ts-ignore
import * as CryptoJS from 'crypto-js';
import {ClientOptions, ITransporter} from "..";
import {UUID} from "../graphql/GaiaScalars";

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

    private static hmac(data: ArrayBuffer, secret: string): string {
        const wordArray = CryptoJS.lib.WordArray.create(data);
        return CryptoJS.HmacSHA512(wordArray, secret).toString();
    }

    /**
     * Authorization: "HMAC-SHA512 " + API_KEY + "_" +
     * base64(hmac-sha512( content, content_type, sensor_type, timestamp, nonce )) + "_" + timestamp + "_" + nonce
     */
    private static hmacHeader(options: ClientOptions, payload: any): string {
        const timestamp = Math.floor(Date.now() / 1000); //todo: check if this is a UTC timestamp
        const nonce = UUID.randomUUID().toString();

        var ByteBuffer = require("bytebuffer");

        const buffer = new ByteBuffer();
        buffer.writeString(JSON.stringify(payload));
        buffer.writeString(options.contentType);
        buffer.writeString("http");
        buffer.writeLong(timestamp);
        buffer.writeString(nonce);

        const content = btoa(this.hmac(buffer.toArrayBuffer, options.apiSecret!));
        return "HMAC-SHA512 " + options.apiKey + "_" + content + "_" + timestamp + "_" + nonce
    }

}
