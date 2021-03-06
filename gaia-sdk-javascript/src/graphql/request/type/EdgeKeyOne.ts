

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * This entity represents the output of an edge delete impulse
 */
export class EdgeKeyOne extends Array<(_:VariableRegistry) => string> {
public _typeName = "EdgeKeyOne";
    public source = () => { 
        this.push(_ => "source")
    };

    public edgeId = () => { 
        this.push(_ => "edgeId")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

