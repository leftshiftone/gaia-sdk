

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* This entity represents the output of a delete tenant impulse
*/
export interface TenantKeyOne {
    tenantId?:Uuid, 
    reference?:Uuid
}