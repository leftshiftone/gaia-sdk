export abstract class AbstractFormData {
    abstract append(name: string, value: string | Blob, filename?: string): void
    abstract get(): any
    abstract getHeaders(): object
}
