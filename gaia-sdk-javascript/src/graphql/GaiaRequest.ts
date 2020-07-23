import {Query} from "./request/type/Query";
import {Mutation} from "./request/type/Mutation";
import {Subscription} from "./request/type/Subscription";

export class GaiaRequest {
    public static query(config:(_:Query) => void) {
        const request = new Query();
        config(request);
        return request;
    }
    public static mutation(config:(_:Mutation) => void) {
        const request = new Mutation();
        config(request);
        return request;
    }
    public static subscription(config:(_:Subscription) => void) {
        const request = new Subscription();
        config(request);
        return request;
    }
}

