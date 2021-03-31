
import {Behaviour} from "./Behaviour";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a update behaviour impulse
*/
export interface UpdatedBehaviourImpulse {
    id?:Uuid, 
    /**
    * the behaviour instance
    */
    data?:Behaviour
}