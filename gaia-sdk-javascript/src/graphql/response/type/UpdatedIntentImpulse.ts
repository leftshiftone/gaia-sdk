
import {Intent} from "./Intent";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a update intent impulse
*/
export interface UpdatedIntentImpulse {
    id?:Uuid, 
    /**
    * the intent instance
    */
    data?:Intent
}