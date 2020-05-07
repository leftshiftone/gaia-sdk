
import {Intent} from "./Intent";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the resulf of a delete code impulse
*/
export interface DeletedCodeImpulse {
    id?:Uuid, 
    /**
    * the code instance
    */
    data?:Intent
}