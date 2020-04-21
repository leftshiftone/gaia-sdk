
import {Conversational} from "./Conversational";
import {StreamingImpulse} from "./StreamingImpulse";
import {PerceivedImpulse} from "./PerceivedImpulse";
import {PerceiveStreamImpulse} from "../../request/input/PerceiveStreamImpulse";
import {PerceiveDataImpulse} from "../../request/input/PerceiveDataImpulse";
import {PerceiveActionImpulse} from "../../request/input/PerceiveActionImpulse";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* This type contains all perception sensor impulses which are used to invoke
* events in gaia.
*/
export interface Perception {
    /**
    * Contains all perception fields needed for a conversation.
    */
    conversational?:Conversational, 
    /**
    * Data perception impulse used to invoke a data transformation behaviour
    */
    perceiveData?:PerceivedImpulse, 
    /**
    * Action perception impulse used to invoke a data transformation behaviour
    */
    perceiveAction?:PerceivedImpulse, 
    /**
    * Stream perception impulse used to invoke a data transformation behaviour.
    *     This perception impulse do not invoke the data transmission but establishes
    *     a connection to the streaming api.
    */
    perceiveStream?:StreamingImpulse
}