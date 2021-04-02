

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to delete an identity instance
 */
export class DeleteIdentityImpulse {
public _typeName = "DeleteIdentityImpulse";
    private identityId:Uuid;

    constructor (identityId:Uuid) {
        this.identityId = identityId;
    }
}
