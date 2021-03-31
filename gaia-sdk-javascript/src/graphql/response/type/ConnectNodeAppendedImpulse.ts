
import {Edge} from "./Edge";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result appending a node connection
*/
export interface ConnectNodeAppendedImpulse {
    id?:Uuid, 
    /**
    * edge created by this request
    */
    newEdge?:Edge
}