

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Represents information used for paginiation
*/
export interface PageInfo {
    startCursor?:string, 
    endCursor?:string, 
    hasNextPage?:Boolean, 
    hasPreviousPage?:Boolean
}