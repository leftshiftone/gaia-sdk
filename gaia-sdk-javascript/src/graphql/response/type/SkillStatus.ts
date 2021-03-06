
import {Failure} from "./Failure";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface SkillStatus {
    health?:string, 
    running?:number, 
    pending?:number, 
    failures?:[Failure]
}