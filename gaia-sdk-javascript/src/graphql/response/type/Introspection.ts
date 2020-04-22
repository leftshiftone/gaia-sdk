
import {SkillIntrospection} from "./SkillIntrospection";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface Introspection {
    cpu?:String, 
    gpu?:String, 
    memory?:String, 
    state?:RuntimeState, 
    started?:Timestamp, 
    skills?:[SkillIntrospection]
}