

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Input for submit perception impulse
 */
export class PerceiveSubmitImpulse {
public _typeName = "PerceiveSubmitImpulse";
    private name:String;
    private value:String;

    constructor (name:String, value:String) {
        this.name = name;
        this.value = value;
    }
}
