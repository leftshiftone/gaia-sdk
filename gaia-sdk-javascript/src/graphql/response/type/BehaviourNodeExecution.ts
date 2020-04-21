

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

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