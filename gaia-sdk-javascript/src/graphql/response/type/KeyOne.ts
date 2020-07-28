

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* This entity represents the output of a delete impulse
*/
export interface KeyOne {
    identityId?:Uuid, 
    reference?:Uuid
}