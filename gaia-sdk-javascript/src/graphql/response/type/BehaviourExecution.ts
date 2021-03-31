

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents behaviour execution information
*/
export interface BehaviourExecution {
    processInstanceId?:Uuid, 
    identityId?:Uuid, 
    state?:string, 
    name?:string, 
    duration?:number, 
    behaviourId?:Uuid, 
    created?:ISO8601, 
    updated?:ISO8601
}