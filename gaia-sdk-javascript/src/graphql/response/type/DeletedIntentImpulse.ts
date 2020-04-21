
import {Intent} from "./Intent";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

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