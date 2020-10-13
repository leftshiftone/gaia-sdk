import {ClientOptions, ITransporter} from "..";
import {HttpClient} from "./HttpClient";

export class HttpTransporter implements ITransporter {

    private readonly url: string;
    private readonly client: HttpClient

    constructor(url: string, client: HttpClient = new HttpClient()) {
        this.url = url;
        this.client = client
    }

    async transport<T>(options: ClientOptions, body: any, urlPostfix: string = ""): Promise<T> {
        let config = await this.client.getDefaultConfig(options, body)
        let url = this.url + urlPostfix
        return this.client.post(JSON.stringify(body), config, url)
            .then(response => JSON.stringify(response) as any)
    }
}
