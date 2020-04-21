

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* Container type for static information
*/
export interface KnowledgeEdge {
    source?:Struct, 
    target?:Struct, 
    type?:String, 
    weight?:Float
}