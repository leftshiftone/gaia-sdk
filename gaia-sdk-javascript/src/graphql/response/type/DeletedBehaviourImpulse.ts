
import {KeyOne} from "./KeyOne";

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the result of a delete behaviour impulse
*/
export interface DeletedBehaviourImpulse {
    id?:Uuid,
    data?:KeyOne
}
