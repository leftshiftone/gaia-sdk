
import {Edge} from "./Edge";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result appending a node connection
*/
export interface ConnectNodeAppendedImpulse {
    id?:Uuid, 
    /**
    * all edges that are set after this request
    */
    allEdges?:[Edge], 
    /**
    * edge created by this request
    */
    newEdge?:Edge
}