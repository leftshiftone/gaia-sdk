

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents behaviour node execution information
*/
export interface BehaviourNodeExecution {
    activityId?:string, 
    behaviourQualifier?:string, 
    behaviourId?:string, 
    reference?:Uuid, 
    qualifier?:string, 
    state?:string, 
    type?:string, 
    created?:ISO8601
}