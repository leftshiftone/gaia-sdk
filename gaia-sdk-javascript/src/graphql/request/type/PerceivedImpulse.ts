

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Impulse which indicates the result of a perceive impulse.
 */
export class PerceivedImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => {
        this.push(_ => "id")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

