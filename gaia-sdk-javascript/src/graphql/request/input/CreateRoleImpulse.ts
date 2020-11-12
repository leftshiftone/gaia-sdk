

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * The specification to create a role instance
 */
export class CreateRoleImpulse {
public _typeName = "CreateRoleImpulse";
    private name:String;
    private permissions:Array<String>;

    constructor (name:String, permissions:Array<String>) {
        this.name = name;
        this.permissions = permissions;
    }
}
