

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class OnConversed extends Array<(_:VariableRegistry) => string> {

    public id = () => {
        this.push(_ => "id")
    };

    public name = () => {
        this.push(_ => "name")
    };

    public type = () => {
        this.push(_ => "type")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

