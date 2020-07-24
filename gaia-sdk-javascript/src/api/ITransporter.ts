import {ClientOptions} from './ClientOptions';
import EnhancedFormData from "form-data"

export interface ITransporter {
    transport<T>(options: ClientOptions, payload: any): Promise<T>;
    transport<T>(options: ClientOptions, payload: any, urlPostFix: string): Promise<T>;
    transportFormData<T>(options: ClientOptions, payload: EnhancedFormData, urlPostFix: string): Promise<T>;

}
