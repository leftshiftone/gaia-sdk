
import {Behaviour} from "./Behaviour";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Reresents a paginated behaviour
 */
export class BehaviourEdge extends Array<(_:VariableRegistry) => string> {

    public node = (config: (_:Behaviour) => void) => this.push((registry) => {
        const entity = new Behaviour();
        config(entity);
        return "node { " + entity.render(registry) + " }";
    });

    public cursor = () => { 
        this.push(_ => "cursor")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

