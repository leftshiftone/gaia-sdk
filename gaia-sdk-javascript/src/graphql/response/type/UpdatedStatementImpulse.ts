
import {Statement} from "./Statement";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a update statement impulse
*/
export interface UpdatedStatementImpulse {
    id?:Uuid, 
    /**
    * the statement instance
    */
    data?:Statement
}