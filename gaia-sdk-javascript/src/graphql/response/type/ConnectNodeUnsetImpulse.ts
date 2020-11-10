
import {EdgeKeyOne} from "./EdgeKeyOne";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result unsetting a node connection
*/
export interface ConnectNodeUnsetImpulse {
    id?:Uuid, 
    /**
    * edges removed by this request
    */
    removedEdges?:[EdgeKeyOne]
}