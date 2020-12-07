
import {BehaviourExecution} from "./BehaviourExecution";
import {BehaviourNodeExecution} from "./BehaviourNodeExecution";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Container type for runtime information
 */
export class Experience extends Array<(_:VariableRegistry) => string> {
public _typeName = "Experience";
    public behaviourExecution = (processInstanceId: Uuid|undefined, config: (_:BehaviourExecution) => void) => this.push((registry) => {
        const name1 = registry.register("processInstanceId", processInstanceId);
        const entity = new BehaviourExecution();
        config(entity);
        return `behaviourExecution(processInstanceId:${name1}){` + entity.render(registry) + "}"
    });

    public behaviourExecutions = (identityId: Uuid|undefined, config: (_:BehaviourExecution) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const entity = new BehaviourExecution();
        config(entity);
        return `behaviourExecutions(identityId:${name1}){` + entity.render(registry) + "}"
    });

    public behaviourNodeExecutions = (config: (_:BehaviourNodeExecution) => void) => this.push((registry) => {
        const entity = new BehaviourNodeExecution();
        config(entity);
        return "behaviourNodeExecutions { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

