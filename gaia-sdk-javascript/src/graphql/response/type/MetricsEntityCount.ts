

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface MetricsEntityCount {
    intents?:number, 
    prompts?:number, 
    statements?:number, 
    fulfilments?:number, 
    behaviours?:number, 
    codes?:number
}