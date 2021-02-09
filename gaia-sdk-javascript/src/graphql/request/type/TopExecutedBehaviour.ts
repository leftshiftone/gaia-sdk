

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class TopExecutedBehaviour extends Array<(_:VariableRegistry) => string> {
public _typeName = "TopExecutedBehaviour";
    public behaviourId = () => { 
        this.push(_ => "behaviourId")
    };

    public behaviourName = () => { 
        this.push(_ => "behaviourName")
    };

    public numberOfExecutions = () => { 
        this.push(_ => "numberOfExecutions")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

