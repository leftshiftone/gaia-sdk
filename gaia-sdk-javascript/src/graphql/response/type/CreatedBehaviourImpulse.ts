
import {Behaviour} from "./Behaviour";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

/**
* Impulse which indicates the result of a create behaviour impulse
*/
export interface CreatedBehaviourImpulse {
    id?:Uuid, 
    /**
    * the behaviour instance
    */
    data?:Behaviour
}