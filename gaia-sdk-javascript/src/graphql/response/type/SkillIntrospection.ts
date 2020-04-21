

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface SkillIntrospection {
    name?:String, 
    state?:SkillState, 
    started?:Timestamp
}