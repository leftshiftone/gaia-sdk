

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

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
    parentProcessId?:Uuid
}