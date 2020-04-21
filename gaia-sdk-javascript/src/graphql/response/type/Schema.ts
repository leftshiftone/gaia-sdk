
import {Query} from "./Query";
import {Mutation} from "./Mutation";
import {Subscription} from "./Subscription";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface Schema {
    query?:Query, 
    mutation?:Mutation, 
    subscription?:Subscription
}