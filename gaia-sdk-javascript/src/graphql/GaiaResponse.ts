import {Query} from "./response/type/Query";
import {Mutation} from "./response/type/Mutation";
import {Subscription} from "./response/type/Subscription";

export interface QueryResponse {
    data?: Query;
    extensions?: Record<string, Array<string>>;
    errors?: Array<Error>;
}

export interface MutationResponse {
    data?: Mutation;
    extensions?: Record<string, Array<string>>;
    errors?: Array<Error>;
}

export interface SubscriptionResponse {
    data?: Subscription;
    extensions?: Record<string, Array<string>>;
    errors?: Array<Error>;
}

export interface Error {
   message: string;
   locations?: Array<Location>;
   path: Array<number>;
}

export interface Location {
   line: number;
   column: number;
}
