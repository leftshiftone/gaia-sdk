

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the result of a delete intent impulse
*/
export interface DeletedIntentImpulse {
    id?:Uuid, 
    identityId?:Uuid, 
    reference?:Uuid
}