import {AbstractFormData} from "./AbstractFormData";
import Blob from "cross-blob"

export class NodeFormData extends AbstractFormData {
    private readonly formData: any = null;

    constructor() {
        super();
        const formData = require('form-data');
        this.formData = new formData();
    }

    async append(name: string, value: string | Blob, filename?: string) {
        // @ts-ignore
        const v = value instanceof Blob ? Buffer.from(await value.arrayBuffer()) : value
        this.formData.append(name, v, {filename})
    }

    get = () => this.formData
    getHeaders = () => this.formData.getHeaders()
}
