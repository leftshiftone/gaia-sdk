
import {Fulfilment} from "./Fulfilment";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

/**
* Impulse which indicates the result of a create fulfilment impulse
*/
export interface CreatedFulfilmentImpulse {
    id?:Uuid, 
    /**
    * the fulfilment instance
    */
    data?:Fulfilment
}