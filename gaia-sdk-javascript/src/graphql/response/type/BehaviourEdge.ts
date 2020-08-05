
import {Behaviour} from "./Behaviour";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Reresents a paginated behaviour
*/
export interface BehaviourEdge {
    node?:Behaviour, 
    cursor?:string
}