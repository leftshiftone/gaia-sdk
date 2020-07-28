

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Represents graph information
*/
export interface Edge {
    source?:Uuid, 
    target?:Uuid, 
    type?:string, 
    weight?:number
}