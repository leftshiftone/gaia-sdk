
import {Intent} from "./Intent";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the resulf of a delete intent impulse
*/
export interface DeletedIntentImpulse {
    id?:Uuid, 
    /**
    * the intent instance
    */
    intent?:Intent
}