

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

export class UserKeyOne extends Array<(_:VariableRegistry) => string> {

    public userId = () => { 
        this.push(_ => "userId")
    };

    public reference = () => { 
        this.push(_ => "reference")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

