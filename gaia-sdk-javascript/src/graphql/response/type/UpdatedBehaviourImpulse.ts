
import {Behaviour} from "./Behaviour";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the resulf of a update behaviour impulse
*/
export interface UpdatedBehaviourImpulse {
    id?:Uuid, 
    /**
    * the behaviour instance
    */
    behaviour?:Behaviour
}