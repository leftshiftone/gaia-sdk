

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to remove an edge of a certain type with a certain target from a node
 */
export class ConnectRemoveNodeImpulse {
public _typeName = "ConnectRemoveNodeImpulse";
    private type:EdgeType;
    private target:Uuid;

    constructor (type:EdgeType, target:Uuid) {
        this.type = type;
        this.target = target;
    }
}
