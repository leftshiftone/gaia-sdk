

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

export class Activation extends Array<(_:VariableRegistry) => string> {

    public tmp = () => { 
        this.push(_ => "tmp")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

