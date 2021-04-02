

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to create an user instance
 */
export class CreateUserImpulse {
public _typeName = "CreateUserImpulse";
    private username:String;
    private email:String;
    private firstName:String;
    private lastName:String;
    private password:String;
    private using2FA:Boolean;
    private tenants:Array<String>;
    private roles:Array<String>;
    private groups:Array<String>;
    private permissions:Array<String>;

    constructor (username:String, email:String, firstName:String, lastName:String, password:String, using2FA:Boolean, tenants:Array<String>, roles:Array<String>, groups:Array<String>, permissions:Array<String>) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.using2FA = using2FA;
        this.tenants = tenants;
        this.roles = roles;
        this.groups = groups;
        this.permissions = permissions;
    }
}
