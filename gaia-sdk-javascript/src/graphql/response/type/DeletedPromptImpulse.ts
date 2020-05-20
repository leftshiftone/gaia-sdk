
import {Intent} from "./Intent";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the result of a delete prompt impulse
*/
export interface DeletedPromptImpulse {
    id?:Uuid, 
    /**
    * the prompt instance
    */
    data?:Intent
}