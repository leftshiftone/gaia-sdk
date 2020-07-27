

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface OnDeleted {
    id?:Uuid,
    identityId?:Uuid,
    reference?:Uuid,
    type?:string
}
