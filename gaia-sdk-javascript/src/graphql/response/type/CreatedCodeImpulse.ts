
import {Code} from "./Code";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a create code impulse
*/
export interface CreatedCodeImpulse {
    id?:Uuid, 
    /**
    * the code instance
    */
    data?:Code
}