
import {BehaviourExecution} from "./BehaviourExecution";
import {BehaviourNodeExecution} from "./BehaviourNodeExecution";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Container type for runtime information
*/
export interface Experience {
    behaviourExecutions?:[BehaviourExecution], 
    behaviourNodeExecutions?:[BehaviourNodeExecution]
}