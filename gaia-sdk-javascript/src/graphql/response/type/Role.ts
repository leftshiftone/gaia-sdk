

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents Role information
*/
export interface Role {
    /**
    * Id of the tenant
    */
    tenantId?:Uuid, 
    /**
    * Id of the role
    */
    roleId?:Uuid, 
    /**
    * The name of the role
    */
    name?:string, 
    /**
    * The permissions of the role
    */
    permissions?:[string]
}