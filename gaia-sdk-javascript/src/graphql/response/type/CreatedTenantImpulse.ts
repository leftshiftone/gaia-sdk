
import {Tenant} from "./Tenant";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a create Tenant impulse
*/
export interface CreatedTenantImpulse {
    id?:Uuid, 
    /**
    * the Tenant instance
    */
    data?:Tenant
}