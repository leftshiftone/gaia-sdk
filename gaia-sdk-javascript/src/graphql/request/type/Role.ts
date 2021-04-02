

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents Role information
 */
export class Role extends Array<(_:VariableRegistry) => string> {
public _typeName = "Role";
    /**
     * Id of the tenant
     */
    public tenantId = () => { 
        this.push(_ => "tenantId")
    };

    /**
     * Id of the role
     */
    public roleId = () => { 
        this.push(_ => "roleId")
    };

    /**
     * The name of the role
     */
    public name = () => { 
        this.push(_ => "name")
    };

    /**
     * The permissions of the role
     */
    public permissions = () => { 
        this.push(_ => "permissions")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

