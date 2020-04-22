

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface BehaviourNodeExecution {
    processInstanceId?:Uuid, 
    nodeInstanceId?:Uuid, 
    state?:String, 
    executionGroupId?:Uuid, 
    nodeId?:Uuid, 
    processId?:Uuid, 
    type?:String, 
    transitions?:Struct, 
    timestamp?:Long, 
    parentProcessId?:Uuid
}