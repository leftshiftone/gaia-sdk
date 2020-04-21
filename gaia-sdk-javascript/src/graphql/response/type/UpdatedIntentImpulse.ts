
import {Intent} from "./Intent";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* Impulse which indicates the resulf of a update intent impulse
*/
export interface UpdatedIntentImpulse {
    id?:Uuid, 
    /**
    * the intent instance
    */
    intent?:Intent
}