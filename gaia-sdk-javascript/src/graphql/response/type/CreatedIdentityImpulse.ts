
import {Identity} from "./Identity";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a create identity impulse
*/
export interface CreatedIdentityImpulse {
    id?:Uuid, 
    /**
    * the identity instance
    */
    data?:Identity
}