

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
    processInstanceId?:Uuid, 
    nodeInstanceId?:Uuid, 
    state?:string, 
    executionGroupId?:Uuid, 
    nodeId?:Uuid, 
    processId?:Uuid, 
    type?:string, 
    transitions?:Struct, 
    timestamp?:ISO8601, 
    parentProcessId?:Uuid
}