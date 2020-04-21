import {Query} from "./response/type/Query";
import {Mutation} from "./response/type/Mutation";
import {Subscription} from "./response/type/Subscription";

export interface QueryResponse {
    data?: Query;
    extensions?: Record<string, Array<string>>;
    errors?: Array<string>;
}

export interface MutationResponse {
    data?: Mutation;
    extensions?: Record<string, Array<string>>;
    errors?: Array<string>;
}

export interface SubscriptionResponse {
    data?: Subscription;
    extensions?: Record<string, Array<string>>;
    errors?: Array<string>;
}
