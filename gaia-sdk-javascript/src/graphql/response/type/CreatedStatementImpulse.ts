
import {Statement} from "./Statement";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a create statement impulse
*/
export interface CreatedStatementImpulse {
    id?:Uuid, 
    /**
    * the statement instance
    */
    data?:Statement
}