
import {SkillIntrospection} from "./SkillIntrospection";

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface Introspection {
    cpu?:string,
    gpu?:string,
    memory?:string,
    state?:RuntimeState,
    started?:ISO8601,
    skills?:[SkillIntrospection]
}
