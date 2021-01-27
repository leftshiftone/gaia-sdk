import axios, {AxiosRequestConfig} from "axios";
import {ClientOptions} from "..";

export class HttpClient {
    public post(body: any, config: AxiosRequestConfig, url: string): Promise<any> {
        return axios.post(url, body, config)
            .then(response => response.data)
            .catch(err => {
                let data = (err.response || {}).data
                if (data instanceof ArrayBuffer) {
                    // @ts-ignore
                    data = String.fromCharCode.apply(null, new Uint8Array(data))
                }
                throw new Error(err + ": " + data)
            })
    }

    public async getDefaultConfig(options: ClientOptions, body: any): Promise<AxiosRequestConfig> {
        return {
            headers: {
                'Content-Type': options.contentType,
                Authorization: await options.credentials.createAuthHeader(options, body)
            },
            params: options.requestParameters
        }

    }

    static asString(payload: any): string {
        if (payload instanceof String) {
            return payload.toString()
        } else if (typeof payload === 'string') {
            return payload
        }
        return JSON.stringify(payload)
    }
}
