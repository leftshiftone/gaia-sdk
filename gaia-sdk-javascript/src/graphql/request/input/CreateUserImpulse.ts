

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * The specification to create an user instance
 */
export class CreateUserImpulse {
public _typeName = "CreateUserImpulse";
    private username:String;
    private password:String;
    private using2FA:Boolean;
    private tenants:Array<String>;
    private roles:Array<String>;
    private groups:Array<String>;
    private permissions:Array<String>;

    constructor (username:String, password:String, using2FA:Boolean, tenants:Array<String>, roles:Array<String>, groups:Array<String>, permissions:Array<String>) {
        this.username = username;
        this.password = password;
        this.using2FA = using2FA;
        this.tenants = tenants;
        this.roles = roles;
        this.groups = groups;
        this.permissions = permissions;
    }
}
