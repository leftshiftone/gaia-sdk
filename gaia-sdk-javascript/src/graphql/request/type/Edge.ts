

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Represents graph information
 */
export class Edge extends Array<(_:VariableRegistry) => string> {

    public source = () => {
        this.push(_ => "source")
    };

    public target = () => {
        this.push(_ => "target")
    };

    public type = () => {
        this.push(_ => "type")
    };

    public weight = () => {
        this.push(_ => "weight")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

