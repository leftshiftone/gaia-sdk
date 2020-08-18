
import {Query} from "./Query";
import {Mutation} from "./Mutation";
import {Subscription} from "./Subscription";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface Schema {
    query?:Query, 
    mutation?:Mutation, 
    subscription?:Subscription
}