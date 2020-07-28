import {ClientOptions} from './ClientOptions';

export interface IFunctionTransporter {
    transport<T>(options: ClientOptions, payload: any, urlPostFix?: string): Promise<T>;
}
