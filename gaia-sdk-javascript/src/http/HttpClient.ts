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
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type',
                Authorization: options.credentials.createAuthorizationString(options, HttpClient.asString(body))
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
