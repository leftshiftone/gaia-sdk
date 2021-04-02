

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to set an edge for a node
 */
export class ConnectSetNodeImpulse {
public _typeName = "ConnectSetNodeImpulse";
    private type:EdgeType;
    private target:Uuid;
    private properties:Struct;
    private weight:Number;

    constructor (type:EdgeType, target:Uuid, properties:Struct, weight:Number) {
        this.type = type;
        this.target = target;
        this.properties = properties;
        this.weight = weight;
    }
}
