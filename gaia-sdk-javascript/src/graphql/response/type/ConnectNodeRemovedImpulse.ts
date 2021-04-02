
import {EdgeKeyOne} from "./EdgeKeyOne";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result removing a node connection
*/
export interface ConnectNodeRemovedImpulse {
    id?:Uuid, 
    /**
    * edges removed by this request
    */
    removedEdges?:[EdgeKeyOne]
}