

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* This entity represents the output of an edge delete impulse
*/
export interface EdgeKeyOne {
    source?:Uuid, 
    edgeId?:Uuid
}