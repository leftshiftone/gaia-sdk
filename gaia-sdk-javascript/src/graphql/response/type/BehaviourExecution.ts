
import {BehaviourNodeExecution} from "./BehaviourNodeExecution";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents behaviour execution information
*/
export interface BehaviourExecution {
    processInstanceId?:Uuid, 
    state?:string, 
    timestamp?:ISO8601, 
    duration?:ISO8601, 
    startEventType?:string, 
    startEventId?:Uuid, 
    initAttributes?:Struct, 
    processId?:Uuid, 
    parentProcessId?:Uuid, 
    nodes?:[BehaviourNodeExecution]
}