
import {EdgeKeyOne} from "./EdgeKeyOne";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a delete edge impulse
*/
export interface DeletedEdgeImpulse {
    id?:Uuid, 
    data?:EdgeKeyOne
}