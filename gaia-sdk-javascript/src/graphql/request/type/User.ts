

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents User information
 */
export class User extends Array<(_:VariableRegistry) => string> {
public _typeName = "User";
    /**
     * Id of the user
     */
    public userId = () => { 
        this.push(_ => "userId")
    };

    /**
     * The username of the user
     */
    public username = () => { 
        this.push(_ => "username")
    };

    /**
     * The email of the user
     */
    public email = () => { 
        this.push(_ => "email")
    };

    /**
     * The first name of the user
     */
    public firstName = () => { 
        this.push(_ => "firstName")
    };

    /**
     * The last name of the user
     */
    public lastName = () => { 
        this.push(_ => "lastName")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

