

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to create a role instance
 */
export class CreateRoleImpulse {
public _typeName = "CreateRoleImpulse";
    private tenantId:Uuid;
    private name:String;
    private permissions:Array<String>;

    constructor (tenantId:Uuid, name:String, permissions:Array<String>) {
        this.tenantId = tenantId;
        this.name = name;
        this.permissions = permissions;
    }
}
