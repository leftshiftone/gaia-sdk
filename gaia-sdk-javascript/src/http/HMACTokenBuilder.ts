// @ts-ignore
import * as CryptoJS from 'crypto-js';
import {ClientOptions} from "..";
import {HMACCredentials} from "../api/GaiaCredentials";

export class HMACTokenBuilder {

    private payload: string;
    private nonce: string;
    private clientOptions: ClientOptions;
    private timestamp: number;

    constructor() {
        this.payload = ""
        this.nonce = ""
        this.timestamp = 0
        this.clientOptions = new ClientOptions(new HMACCredentials("",""))
    }

    public withPayload(payload: string): HMACTokenBuilder{
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
        const base64EncodedPayload= btoa(this.payload)
        let prepareToHash = [base64EncodedPayload,this.clientOptions.contentType,HTTP_SENSOR_TYPE,this.timestamp,this.nonce].join(sep)
        const hmac = CryptoJS.HmacSHA512(Buffer.from(prepareToHash).toString(),credentials.apiSecret).toString()
        const signature = btoa(hmac);

        return "HMAC-SHA512 " + [credentials.apiKey,signature,this.timestamp,this.nonce].join(sep)
    }



}
