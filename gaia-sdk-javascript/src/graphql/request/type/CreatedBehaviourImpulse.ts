
import {Behaviour} from "./Behaviour";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Impulse which indicates the resulf of a create behaviour impulse
 */
export class CreatedBehaviourImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the behaviour instance
     */
    public behaviour = (config: (_:Behaviour) => void) => this.push((registry) => {
        const entity = new Behaviour();
        config(entity);
        return "behaviour { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}
