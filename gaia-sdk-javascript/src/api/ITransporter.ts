import {ClientOptions} from './ClientOptions';

export interface ITransporter {
    transport<T>(options: ClientOptions, payload: any, urlPostFix?: string): Promise<T>;
}
