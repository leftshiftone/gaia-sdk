import axios, {AxiosRequestConfig} from "axios";
import {ClientOptions} from "..";

export class HttpClient {
    public post(body: any, config: AxiosRequestConfig, url: string): Promise<any> {
        return axios.post(url, body, config)
            .then(response => response.data)
            .catch(err => {
                throw new Error(err + ": " + (err.response || {}).data)
            })
    }

    public getDefaultConfig(options: ClientOptions, body: any): AxiosRequestConfig {
        return {
            headers: {
                'Content-Type': options.contentType,
                Authorization: options.credentials.createAuthHeader(options, HttpClient.asString(body))
            }
        }
    }

    private static asString(payload: any): string {
        if (payload instanceof String) {
            return payload.toString()
        } else if (typeof payload === 'string') {
            return payload
        }
        return JSON.stringify(payload)
    }
}
