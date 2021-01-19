

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to delete a role instance
 */
export class DeleteRoleImpulse {
public _typeName = "DeleteRoleImpulse";
    private tenantId:Uuid;
    private roleId:Uuid;

    constructor (tenantId:Uuid, roleId:Uuid) {
        this.tenantId = tenantId;
        this.roleId = roleId;
    }
}
