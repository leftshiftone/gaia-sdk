
import {UpdatedIntentImpulse} from "./UpdatedIntentImpulse";
import {UpdateIntentImpulse} from "../../request/input/UpdateIntentImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface UpdateKnowledge {
    /**
    * updates a list of intents with the given specifications
    */
    intents?:[UpdatedIntentImpulse]
}