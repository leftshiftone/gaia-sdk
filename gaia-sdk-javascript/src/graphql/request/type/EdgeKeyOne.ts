

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * This entity represents the output of an edge delete impulse
 */
export class EdgeKeyOne extends Array<(_:VariableRegistry) => string> {

    public source = () => { 
        this.push(_ => "source")
    };

    public target = () => { 
        this.push(_ => "target")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

