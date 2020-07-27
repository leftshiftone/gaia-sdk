

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

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
