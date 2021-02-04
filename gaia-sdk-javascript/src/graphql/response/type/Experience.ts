
import {BehaviourExecution} from "./BehaviourExecution";
import {SkillProvisionBuildJob} from "./SkillProvisionBuildJob";
import {BehaviourNodeExecution} from "./BehaviourNodeExecution";
import {BehaviourExecutionDetail} from "./BehaviourExecutionDetail";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Container type for runtime information
*/
export interface Experience {
    behaviourExecution?:BehaviourExecutionDetail, 
    behaviourExecutions?:[BehaviourExecution], 
    behaviourNodeExecutions?:[BehaviourNodeExecution], 
    skillProvisionBuildJobs?:[SkillProvisionBuildJob]
}