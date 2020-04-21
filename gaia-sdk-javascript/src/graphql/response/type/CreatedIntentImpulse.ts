
import {Intent} from "./Intent";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* Impulse which indicates the resulf of a create intent impulse
*/
export interface CreatedIntentImpulse {
    id?:Uuid, 
    /**
    * the intent instance
    */
    intent?:Intent
}