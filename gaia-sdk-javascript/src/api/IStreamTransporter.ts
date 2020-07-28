import {ClientOptions} from './ClientOptions';

export interface IStreamTransporter {
    transport<T>(options: ClientOptions, payload: any, urlPostFix?: string): Promise<T>;
    transportAndRetrieveBinary(options: ClientOptions, body: any, urlPostfix?: string): Promise<Blob>
}
