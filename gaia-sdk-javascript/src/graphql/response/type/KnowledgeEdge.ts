

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Container type for static information
*/
export interface KnowledgeEdge {
    source?:Struct, 
    target?:Struct, 
    type?:String, 
    weight?:Float
}