import {ClientOptions} from "..";
import Blob from 'cross-blob'
import {HttpClient} from "./HttpClient";
import {IStreamTransporter} from "../api/IStreamTransporter";

export class StreamHttpTransporter implements IStreamTransporter {

    private readonly url: string;
    private readonly client: HttpClient

    constructor(url: string, client: HttpClient = new HttpClient()) {
        this.url = url;
        this.client = client
    }

    async transport<T>(options: ClientOptions, body: any, urlPostfix: string = ""): Promise<T> {
        let customHeaders = {};
        let config = await this.client.getDefaultConfig(options, body)
        config = {...config, headers: {...config.headers, ...customHeaders}}
        let url = this.url + urlPostfix
        return this.client.post(body, config, url)
    }

    async transportAndRetrieveBinary(options: ClientOptions, body: any, urlPostfix: string = ""): Promise<Blob> {
        let config = await this.client.getDefaultConfig(options, body)
        config.responseType = "arraybuffer"
        let url = this.url + urlPostfix
        return this.client.post(JSON.stringify(body), config, url)
            .then(data => new Blob([data as BlobPart]))
    }
}
