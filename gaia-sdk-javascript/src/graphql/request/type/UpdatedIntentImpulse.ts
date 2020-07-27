
import {Intent} from "./Intent";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Impulse which indicates the result of a update intent impulse
 */
export class UpdatedIntentImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => {
        this.push(_ => "id")
    };

    /**
     * the intent instance
     */
    public data = (config: (_:Intent) => void) => this.push((registry) => {
        const entity = new Intent();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

