

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Each message returned from GAIA implements this interface
*/
export interface Impulse {
    /**
    * The id of the impulse
    */
    id?:Uuid
}