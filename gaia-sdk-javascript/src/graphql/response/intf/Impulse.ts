

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Each message returned from GAIA implements this interface
*/
export interface Impulse {
    /**
    * The id of the impulse
    */
    id?:Uuid
}