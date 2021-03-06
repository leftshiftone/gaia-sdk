

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Input for reception perception impulse
 */
export class PerceiveReceptionImpulse {
public _typeName = "PerceiveReceptionImpulse";
    private data:Struct;

    constructor (data:Struct) {
        this.data = data;
    }
}
