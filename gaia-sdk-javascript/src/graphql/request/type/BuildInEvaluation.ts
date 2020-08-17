

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

export class BuildInEvaluation extends Array<(_:VariableRegistry) => string> {

    public behaviour = () => { 
        this.push(_ => "behaviour")
    };

    public gaiaquery = () => { 
        this.push(_ => "gaiaquery")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

