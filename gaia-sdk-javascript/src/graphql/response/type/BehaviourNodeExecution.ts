

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
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