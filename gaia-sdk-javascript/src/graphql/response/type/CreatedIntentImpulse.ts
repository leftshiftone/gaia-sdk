
import {Intent} from "./Intent";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a create intent impulse
*/
export interface CreatedIntentImpulse {
    id?:Uuid, 
    /**
    * the intent instance
    */
    data?:Intent
}