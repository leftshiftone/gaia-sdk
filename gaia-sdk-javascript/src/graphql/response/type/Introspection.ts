
import {SkillIntrospection} from "./SkillIntrospection";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface Introspection {
    cpu?:string, 
    gpu?:string, 
    memory?:string, 
    state?:RuntimeState, 
    started?:ISO8601, 
    skills?:[SkillIntrospection]
}