

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface BehaviourExecution {
    processInstanceId?:Uuid, 
    state?:String, 
    timestamp?:Long, 
    duration?:Long, 
    startEventType?:String, 
    startEventId?:Uuid, 
    initAttributes?:Struct, 
    processId?:Uuid, 
    parentProcessId?:Uuid
}