import {AbstractFormData} from "./AbstractFormData";

export class BrowserFormData extends AbstractFormData {
    private formData = new FormData()

    append = (name: string, value: string | Blob, filename?: string) => this.formData.append(name, value, filename)
    get = () => this.formData
    getHeaders = () => Object.assign({})
}
