// @ts-ignore
import * as CryptoJS from 'crypto-js';
import {ClientOptions} from "..";
import {HMACCredentials} from "../api/GaiaCredentials";
import {HttpClient} from "./HttpClient";

export class HMACTokenBuilder {

    private payload: any;
    private nonce: string;
    private clientOptions: ClientOptions;
    private timestamp: number;

    constructor() {
        this.payload = ""
        this.nonce = ""
        this.timestamp = 0
        this.clientOptions = new ClientOptions(new HMACCredentials("",""),"application/json")
    }

    public withPayload(payload: any): HMACTokenBuilder{
        this.payload=payload
        return this
    }
    public withNonce(nonce: string): HMACTokenBuilder{
        this.nonce=nonce
        return this
    }
    public withClientOptions(clientOptions: ClientOptions): HMACTokenBuilder{
        this.clientOptions=clientOptions
        return this
    }

    public withTimestamp(timestamp: number): HMACTokenBuilder{
        this.timestamp=timestamp
        return this
    }

    /**
     * Authorization: "HMAC-SHA512 " + API_KEY + "_" +
     * base64(hmac-sha512( content, content_type, sensor_type, timestamp, nonce )) + "_" + timestamp + "_" + nonce
     */
    public build(): string {
        var credentials = this.clientOptions.credentials as HMACCredentials
        const sep = "_"
        const HTTP_SENSOR_TYPE = "http"
        const base64EncodedPayload = this.toBase64(this.payload);
        let prepareToHash = [base64EncodedPayload,this.clientOptions.contentType,HTTP_SENSOR_TYPE,this.timestamp,this.nonce].join(sep)
        const hmac = CryptoJS.HmacSHA512(Buffer.from(prepareToHash).toString(),credentials.apiSecret).toString()
        const signature = this.toBase64(hmac);

        return "HMAC-SHA512 " + [credentials.apiKey,signature,this.timestamp,this.nonce].join(sep)
    }

    private toBase64(data: any): string {
        if (this.isBuffer(data)) {
            return data.toString('base64');
        } else {
            let stringData = HttpClient.asString(data)
            return typeof btoa !== 'undefined' && btoa(stringData) || Buffer.from(stringData, 'binary').toString('base64');
        }
    }

    private isBuffer(b: Buffer): b is Buffer {
        if ((b as Buffer).writeFloatLE) {
            return true;
        }
        return false;
    }



}
