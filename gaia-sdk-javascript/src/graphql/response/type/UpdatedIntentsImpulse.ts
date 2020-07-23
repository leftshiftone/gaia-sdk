
import {Intent} from "./Intent";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the resulf of a update intent impulse
*/
export interface UpdatedIntentsImpulse {
    id?:Uuid, 
    /**
    * the intent instance
    */
    intents?:[Intent]
}