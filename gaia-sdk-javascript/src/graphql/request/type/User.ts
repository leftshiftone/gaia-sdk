

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * Represents User information
 */
export class User extends Array<(_:VariableRegistry) => string> {

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
     * The password of the user
     */
    public password = () => { 
        this.push(_ => "password")
    };

    /**
     * Is the User using 2FA
     */
    public using2FA = () => { 
        this.push(_ => "using2FA")
    };

    /**
     * The tenants of the user
     */
    public tenants = () => { 
        this.push(_ => "tenants")
    };

    /**
     * The roles of the user
     */
    public roles = () => { 
        this.push(_ => "roles")
    };

    /**
     * The groups of the user
     */
    public groups = () => { 
        this.push(_ => "groups")
    };

    /**
     * The permissions of the user
     */
    public permissions = () => { 
        this.push(_ => "permissions")
    };

    /**
     * The last passwords of the user
     */
    public lastPasswords = () => { 
        this.push(_ => "lastPasswords")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

