
import {BehaviourExecution} from "./BehaviourExecution";
import {BehaviourNodeExecution} from "./BehaviourNodeExecution";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * Container type for runtime information
 */
export class Experience extends Array<(_:VariableRegistry) => string> {

    public behaviourExecutions = (config: (_:BehaviourExecution) => void) => this.push((registry) => {
        const entity = new BehaviourExecution();
        config(entity);
        return "behaviourExecutions { " + entity.render(registry) + " }";
    });

    public behaviourNodeExecutions = (config: (_:BehaviourNodeExecution) => void) => this.push((registry) => {
        const entity = new BehaviourNodeExecution();
        config(entity);
        return "behaviourNodeExecutions { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

