
import {KnowledgeEdge} from "./KnowledgeEdge";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the result of a create edge impulse
*/
export interface CreatedEdgeImpulse {
    id?:Uuid, 
    /**
    * the edge instance
    */
    data?:KnowledgeEdge
}