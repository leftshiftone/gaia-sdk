
import {PageInfo} from "./PageInfo";
import {BehaviourEdge} from "./BehaviourEdge";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Represents a paginated collection of behaviours
 */
export class BehaviourConnection extends Array<(_:VariableRegistry) => string> {

    public edges = (config: (_:BehaviourEdge) => void) => this.push((registry) => {
        const entity = new BehaviourEdge();
        config(entity);
        return "edges { " + entity.render(registry) + " }";
    });

    public pageInfo = (config: (_:PageInfo) => void) => this.push((registry) => {
        const entity = new PageInfo();
        config(entity);
        return "pageInfo { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

