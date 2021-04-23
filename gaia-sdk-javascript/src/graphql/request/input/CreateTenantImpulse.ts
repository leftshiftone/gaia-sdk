

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to create a tenant
 */
export class CreateTenantImpulse {
public _typeName = "CreateTenantImpulse";
    private qualifier:String;

    constructor (qualifier:String) {
        this.qualifier = qualifier;
    }
}
