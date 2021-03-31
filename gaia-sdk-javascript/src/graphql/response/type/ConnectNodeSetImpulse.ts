
import {EdgeKeyOne} from "./EdgeKeyOne";
import {Edge} from "./Edge";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result setting a node connection
*/
export interface ConnectNodeSetImpulse {
    id?:Uuid, 
    /**
    * edges removed before setting the new edge
    */
    removedEdges?:[EdgeKeyOne], 
    /**
    * edge created by this request
    */
    newEdge?:Edge
}