

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

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