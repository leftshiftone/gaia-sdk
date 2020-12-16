
import {BehaviourNodeExecution} from "./BehaviourNodeExecution";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents a detailed summary of executed prompts to a given processInstanceId
*/
export interface BehaviourExecutionDetail {
    processInstanceId?:Uuid, 
    identityId?:Uuid, 
    qualifier?:string, 
    behaviour?:string, 
    behaviourId?:Uuid, 
    nodes?:[BehaviourNodeExecution]
}