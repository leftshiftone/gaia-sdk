import {Intent} from "./Intent";

import {Uuid} from "../../GaiaClient";

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
