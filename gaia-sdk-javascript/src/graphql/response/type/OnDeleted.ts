

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface OnDeleted {
    id?:Uuid, 
    identityId?:Uuid, 
    reference?:Uuid, 
    type?:String
}