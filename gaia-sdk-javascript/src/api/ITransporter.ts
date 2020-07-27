import {ClientOptions} from './ClientOptions';

export interface ITransporter {
    downloadBlob(options: ClientOptions, body: any, urlPostfix?: string): Promise<Blob>
    transport<T>(options: ClientOptions, payload: any, urlPostFix?: string): Promise<T>;
    transportFormData<T>(options: ClientOptions, payload: FormData, urlPostFix: string): Promise<T>;

}
