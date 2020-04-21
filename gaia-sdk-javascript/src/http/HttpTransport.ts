// @ts-ignore
import * as CryptoJS from 'crypto-js';
import {ITransporter} from "../api/ITransporter";
import {ClientOptions} from "../api/ClientOptions";

export class HttpTransport implements ITransporter {

    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    transport<T>(options: ClientOptions, body: any): Promise<T> {
        const headers = {
            'Content-Type': 'application/json',
            'X-GAIA-APIKEY': options.apiKey,
            'X-GAIA-SIGNATURE': HttpTransport.hash(body, options.apiSecret)
        };

        console.log("body");
        console.log(body);

        return new Promise<T>((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open("post", this.url);
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader('Access-Control-Allow-Credentials', 'true');
            request.setRequestHeader('Access-Control-Allow-Methods', 'POST');
            request.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');

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

            console.log("Send");
            console.log(JSON.stringify(body));

            request.send(JSON.stringify(body));
        });
    }

    private static hash(data: any, secret?: string): string {
        return CryptoJS.HmacSHA512(btoa(JSON.stringify(data)), secret || 'default').toString();
    }

}
