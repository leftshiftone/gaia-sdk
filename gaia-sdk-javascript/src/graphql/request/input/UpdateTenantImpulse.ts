

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to update a tenant
 */
export class UpdateTenantImpulse {
public _typeName = "UpdateTenantImpulse";
    private tenantId:Uuid;
    private qualifier:String;

    constructor (tenantId:Uuid, qualifier:String) {
        this.tenantId = tenantId;
        this.qualifier = qualifier;
    }
}
