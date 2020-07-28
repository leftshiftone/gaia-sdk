

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Each message returned from GAIA implements this interface
 */
export class Impulse extends Array<(_:VariableRegistry) => string> {

    /**
     * The id of the impulse
     */
    public id = () => {
        this.push(_ => "id")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

