

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class SyncSkillEvaluation extends Array<(_:VariableRegistry) => string> {
public _typeName = "SyncSkillEvaluation";
    public tbd = () => { 
        this.push(_ => "tbd")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

