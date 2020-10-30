

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * Represents graph information
 */
export class Edge extends Array<(_:VariableRegistry) => string> {
public _typeName = "Edge";
    public source = () => { 
        this.push(_ => "source")
    };

    public target = () => { 
        this.push(_ => "target")
    };

    public edgeId = () => { 
        this.push(_ => "edgeId")
    };

    public type = () => { 
        this.push(_ => "type")
    };

    public weight = () => { 
        this.push(_ => "weight")
    };

    public properties = () => { 
        this.push(_ => "properties")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

