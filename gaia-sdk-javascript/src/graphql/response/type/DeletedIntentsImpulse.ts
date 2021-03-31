import {Intent} from "./Intent";

import {Uuid} from "../../GaiaClient";

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
