
import {KeyOne} from "./KeyOne";

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the result of a delete edge impulse
*/
export interface DeletedEdgeImpulse {
    id?:Uuid,
    data?:KeyOne
}
