
import {StreamingImpulse} from "./StreamingImpulse";
import {StreamImpulse} from "../../request/input/StreamImpulse";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* This type contains all practice sensor impulses which are used to support
* practice in gaia.
*/
export interface Practice {
    /**
    * Stream practice preparation impulse used to transfer a skill to gaia.
    *     This perception impulse do not invoke the data transmission but establishes
    *     a connection to the streaming api.
    */
    prepare?:StreamingImpulse
}