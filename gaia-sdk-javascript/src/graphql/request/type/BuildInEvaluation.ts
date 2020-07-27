

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class BuildInEvaluation extends Array<(_:VariableRegistry) => string> {

    public behaviour = () => {
        this.push(_ => "behaviour")
    };

    public gaiaquery = () => {
        this.push(_ => "gaiaquery")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

