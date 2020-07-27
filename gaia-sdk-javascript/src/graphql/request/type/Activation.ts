

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class Activation extends Array<(_:VariableRegistry) => string> {

    public tmp = () => {
        this.push(_ => "tmp")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

