
import {SkillIntrospection} from "./SkillIntrospection";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface Introspection {
    cpu?:String, 
    gpu?:String, 
    memory?:String, 
    state?:RuntimeState, 
    started?:Timestamp, 
    skills?:[SkillIntrospection]
}