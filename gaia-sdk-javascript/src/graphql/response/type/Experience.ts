
import {BehaviourExecution} from "./BehaviourExecution";
import {BehaviourNodeExecution} from "./BehaviourNodeExecution";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* Container type for runtime information
*/
export interface Experience {
    behaviourExecutions?:[BehaviourExecution], 
    behaviourNodeExecutions?:[BehaviourNodeExecution]
}