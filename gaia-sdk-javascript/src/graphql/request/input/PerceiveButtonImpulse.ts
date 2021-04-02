

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Input for button perception impulse
 */
export class PerceiveButtonImpulse {
public _typeName = "PerceiveButtonImpulse";
    private name:String;
    private value:String;

    constructor (name:String, value:String) {
        this.name = name;
        this.value = value;
    }
}
