

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to update a user instance
 */
export class UpdateUserImpulse {
public _typeName = "UpdateUserImpulse";
    private userId:Uuid;
    private username:String;
    private email:String;
    private firstName:String;
    private lastName:String;
    private password:String;

    constructor (userId:Uuid, username:String, email:String, firstName:String, lastName:String, password:String) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }
}
