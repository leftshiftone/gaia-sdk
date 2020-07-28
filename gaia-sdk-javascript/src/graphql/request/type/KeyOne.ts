

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * This entity represents the output of a delete impulse
 */
export class KeyOne extends Array<(_:VariableRegistry) => string> {

    public identityId = () => {
        this.push(_ => "identityId")
    };

    public reference = () => {
        this.push(_ => "reference")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

