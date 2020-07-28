
import {Identity} from "./Identity";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the result of a create identity impulse
*/
export interface CreatedIdentityImpulse {
    id?:Uuid, 
    /**
    * the identity instance
    */
    data?:Identity
}