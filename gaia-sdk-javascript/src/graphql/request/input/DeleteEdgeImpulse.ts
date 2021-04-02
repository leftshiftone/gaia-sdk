

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to delete an edge instance
 */
export class DeleteEdgeImpulse {
public _typeName = "DeleteEdgeImpulse";
    private source:Uuid;
    private edgeId:Uuid;

    constructor (source:Uuid, edgeId:Uuid) {
        this.source = source;
        this.edgeId = edgeId;
    }
}
