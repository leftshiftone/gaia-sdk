

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

export class AsyncSkillEvaluation extends Array<(_:VariableRegistry) => string> {

    public tbd = () => { 
        this.push(_ => "tbd")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

