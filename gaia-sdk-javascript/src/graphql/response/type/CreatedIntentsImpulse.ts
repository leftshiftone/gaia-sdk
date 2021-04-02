import {Intent} from "./Intent";

import {Uuid} from "../../GaiaClient";

/**
* Impulse which indicates the resulf of a create intent impulse
*/
export interface CreatedIntentsImpulse {
    id?:Uuid,
    /**
    * the intent instance
    */
    intents?:[Intent]
}
