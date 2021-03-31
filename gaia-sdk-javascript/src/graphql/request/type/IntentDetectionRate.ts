

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class IntentDetectionRate extends Array<(_:VariableRegistry) => string> {
public _typeName = "IntentDetectionRate";
    public detected = () => { 
        this.push(_ => "detected")
    };

    public unaware = () => { 
        this.push(_ => "unaware")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}
