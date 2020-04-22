
import {Query} from "./Query";
import {Mutation} from "./Mutation";
import {Subscription} from "./Subscription";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface Schema {
    query?:Query, 
    mutation?:Mutation, 
    subscription?:Subscription
}