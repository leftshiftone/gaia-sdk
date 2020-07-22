import {ClientOptions} from './ClientOptions';

export interface ITransporter {
    transport<T>(options: ClientOptions, payload: any): Promise<T>;
    transportTo<T>(options: ClientOptions, payload: any, urlPostfix: String): Promise<T>;
}
