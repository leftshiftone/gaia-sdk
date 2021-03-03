
import {TopExecutedBehaviour} from "./TopExecutedBehaviour";
import {BehaviourState} from "./BehaviourState";
import {MetricsEntityCount} from "./MetricsEntityCount";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents identity metrics information
*/
export interface IdentityMetrics {
    identityId?:Uuid, 
    entityCount?:MetricsEntityCount, 
    topExecutedBehaviours?:[TopExecutedBehaviour], 
    behaviourStates?:[BehaviourState]
}