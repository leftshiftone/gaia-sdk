
import {PageInfo} from "./PageInfo";
import {BehaviourEdge} from "./BehaviourEdge";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Represents a paginated collection of behaviours
*/
export interface BehaviourConnection {
    edges?:[BehaviourEdge], 
    pageInfo?:PageInfo
}