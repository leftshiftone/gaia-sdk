

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export default class AsyncSkillEvaluation extends Array<(_:VariableRegistry) => string> {

    public tbd = () => { 
        this.push(_ => "tbd")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

