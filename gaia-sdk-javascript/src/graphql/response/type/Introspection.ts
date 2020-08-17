
import {SkillIntrospection} from "./SkillIntrospection";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

export interface Introspection {
    cpu?:string, 
    gpu?:string, 
    memory?:string, 
    state?:RuntimeState, 
    started?:ISO8601, 
    skills?:[SkillIntrospection]
}