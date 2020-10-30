

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

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
