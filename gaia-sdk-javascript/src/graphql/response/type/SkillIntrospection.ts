

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface SkillIntrospection {
    name?:string, 
    state?:SkillState, 
    started?:ISO8601
}