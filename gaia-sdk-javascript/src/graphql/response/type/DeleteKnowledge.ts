
import {DeletedIntentImpulse} from "./DeletedIntentImpulse";
import {DeleteIntentImpulse} from "../../request/input/DeleteIntentImpulse";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface DeleteKnowledge {
    /**
    * deletes a list of intents with the given specifications
    */
    intents?:[DeletedIntentImpulse]
}