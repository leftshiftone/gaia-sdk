
import {BehaviourExecution} from "./BehaviourExecution";
import {BehaviourNodeExecution} from "./BehaviourNodeExecution";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

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

