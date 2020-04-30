

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Container type for static information
*/
export interface KnowledgeEdge {
    source?:Uuid, 
    target?:Uuid, 
    type?:string, 
    weight?:number
}