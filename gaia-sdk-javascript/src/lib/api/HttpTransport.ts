import {ITransporter} from './ITransporter';
import {ClientOptions} from './ClientOptions';
// @ts-ignore
import * as CryptoJS from 'crypto-js';

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

        const init = {headers, body: JSON.stringify(body), method: 'POST', mode: 'cors'} as RequestInit;
        const request = new Request(this.url, init);

        return fetch(request).then((response:any) => {
            return response.json().then((e:any) => e as T);
        });
    }

    private static hash(data: any, secret?: string): string {
        return CryptoJS.HmacSHA512(btoa(JSON.stringify(data)), secret || 'default').toString();
    }

}
