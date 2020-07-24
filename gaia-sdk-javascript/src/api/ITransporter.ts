import {ClientOptions} from './ClientOptions';
import FormData from "form-data"

export interface ITransporter {
    transport<T>(options: ClientOptions, payload: any): Promise<T>;
    transport<T>(options: ClientOptions, payload: any, urlPostFix: string): Promise<T>;
    transportFormData<T>(options: ClientOptions, payload: FormData, urlPostFix: string): Promise<T>;

}
