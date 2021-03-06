

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to create an edge instance
 */
export class CreateEdgeImpulse {
public _typeName = "CreateEdgeImpulse";
    private source:Uuid;
    private target:Uuid;
    private type:String;
    private weight:Number;
    private properties:Struct;

    constructor (source:Uuid, target:Uuid, type:String, weight:Number, properties:Struct) {
        this.source = source;
        this.target = target;
        this.type = type;
        this.weight = weight;
        this.properties = properties;
    }
}
