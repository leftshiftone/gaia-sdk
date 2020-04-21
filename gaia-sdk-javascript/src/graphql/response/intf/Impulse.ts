

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* Each message returned from GAIA implements this interface
*/
export interface Impulse {
    /**
    * The id of the impulse
    */
    id?:Uuid
}