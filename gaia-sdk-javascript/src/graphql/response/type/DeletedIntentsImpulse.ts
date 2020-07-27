
import {Intent} from "./Intent";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the resulf of a delete intent impulse
*/
export interface DeletedIntentsImpulse {
    id?:Uuid,
    /**
    * the intent instance
    */
    intents?:[Intent]
}
