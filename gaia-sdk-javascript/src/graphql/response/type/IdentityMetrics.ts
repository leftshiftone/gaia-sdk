
import {IntentDetectionRate} from "./IntentDetectionRate";
import {TopExecutedBehaviour} from "./TopExecutedBehaviour";
import {BehaviourState} from "./BehaviourState";
import {MetricsEntityCount} from "./MetricsEntityCount";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
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
    behaviourStates?:[BehaviourState], 
    intentDetectionRate?:IntentDetectionRate
}