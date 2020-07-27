
import {Edge} from "./Edge";

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the result of a create edge impulse
*/
export interface CreatedEdgeImpulse {
    id?:Uuid,
    /**
    * the edge instance
    */
    data?:Edge
}
