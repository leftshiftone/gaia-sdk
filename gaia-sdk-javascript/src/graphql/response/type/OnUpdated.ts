

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface OnUpdated {
    id?:Uuid, 
    identityId?:Uuid, 
    reference?:Uuid, 
    type?:string
}