

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to unset edges of a certain type for a node
 */
export class ConnectUnsetNodeImpulse {
public _typeName = "ConnectUnsetNodeImpulse";
    private type:EdgeType;

    constructor (type:EdgeType) {
        this.type = type;
    }
}
