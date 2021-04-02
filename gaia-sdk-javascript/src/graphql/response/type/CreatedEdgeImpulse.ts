
import {Edge} from "./Edge";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a create edge impulse
*/
export interface CreatedEdgeImpulse {
    id?:Uuid, 
    /**
    * the edge instance
    */
    data?:Edge
}