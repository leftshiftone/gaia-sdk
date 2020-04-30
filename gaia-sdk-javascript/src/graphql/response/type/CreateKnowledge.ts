
import {CreatedIntentImpulse} from "./CreatedIntentImpulse";
import {CreateIntentImpulse} from "../../request/input/CreateIntentImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface CreateKnowledge {
    /**
    * creates a list of intents with the given specifications
    */
    intents?:[CreatedIntentImpulse]
}