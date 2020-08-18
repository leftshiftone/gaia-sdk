
import {Fulfilment} from "./Fulfilment";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a update fulfilment impulse
*/
export interface UpdatedFulfilmentImpulse {
    id?:Uuid, 
    /**
    * the fulfilment instance
    */
    data?:Fulfilment
}