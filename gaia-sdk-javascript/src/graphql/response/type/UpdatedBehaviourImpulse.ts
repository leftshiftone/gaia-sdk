
import {Behaviour} from "./Behaviour";

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the result of a update behaviour impulse
*/
export interface UpdatedBehaviourImpulse {
    id?:Uuid,
    /**
    * the behaviour instance
    */
    data?:Behaviour
}
