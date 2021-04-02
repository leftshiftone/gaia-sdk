

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents tenant information
*/
export interface Tenant {
    /**
    * The tenant id
    */
    tenantId?:Uuid, 
    /**
    * The name of the tenant
    */
    qualifier?:string, 
    /**
    * The list of implicit identities
    */
    implicitIdentities?:[string], 
    /**
    * The list of explicit identities
    */
    explicitIdentities?:[string]
}