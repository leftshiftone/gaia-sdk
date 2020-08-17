
import {Conversational} from "./Conversational";
import {PerceivedImpulse} from "./PerceivedImpulse";
import {PerceiveDataImpulse} from "../../request/input/PerceiveDataImpulse";
import {PerceiveActionImpulse} from "../../request/input/PerceiveActionImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

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
    perceiveAction?:PerceivedImpulse
}