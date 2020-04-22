
import {Intent} from "./Intent";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Impulse which indicates the resulf of a create intent impulse
 */
export class CreatedIntentImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the intent instance
     */
    public intent = (config: (_:Intent) => void) => this.push((registry) => {
        const entity = new Intent();
        config(entity);
        return "intent { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

