import {ClientOptions} from "..";
import Blob from 'cross-blob'
import {HttpClient} from "./HttpClient";
import {IStreamTransporter} from "../api/IStreamTransporter";
import {AbstractFormData} from "../graphql/request/formdata/AbstractFormData";

export class StreamHttpTransporter implements IStreamTransporter {

    private readonly url: string;
    private readonly client: HttpClient

    constructor(url: string, client: HttpClient = new HttpClient()) {
        this.url = url;
        this.client = client
    }

    transport<T>(options: ClientOptions, body: any, urlPostfix: string = ""): Promise<T> {
        let customHeaders = {};
        if(body instanceof AbstractFormData) {
            body = body.get()
            customHeaders = body.getHeaders()
        }
        let config = this.client.getDefaultConfig(options, body)
        config = {...config, headers: {...config.headers, ...customHeaders}}
        let url = this.url + urlPostfix
        return this.client.post(body, config, url)
    }

    transportAndRetrieveBinary(options: ClientOptions, body: any, urlPostfix: string = ""): Promise<Blob> {
        let config = this.client.getDefaultConfig(options, body)
        config.responseType = "arraybuffer"
        let url = this.url + urlPostfix
        return this.client.post(JSON.stringify(body), config, url)
            .then(data => new Blob([data as BlobPart]))
    }
}
