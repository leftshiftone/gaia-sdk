import {GaiaClientBuilder} from './GaiaClientBuilder';

export class GaiaClientFactory {
    http(url: string) {
        return GaiaClientBuilder.http(url);
    }
}
