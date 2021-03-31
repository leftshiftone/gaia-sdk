

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to update a role instance
 */
export class UpdateRoleImpulse {
public _typeName = "UpdateRoleImpulse";
    private tenantId:Uuid;
    private roleId:Uuid;
    private name:String;
    private permissions:Array<String>;

    constructor (tenantId:Uuid, roleId:Uuid, name:String, permissions:Array<String>) {
        this.tenantId = tenantId;
        this.roleId = roleId;
        this.name = name;
        this.permissions = permissions;
    }
}
