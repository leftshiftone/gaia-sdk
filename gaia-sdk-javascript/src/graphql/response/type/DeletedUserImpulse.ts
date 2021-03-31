
import {UserKeyOne} from "./UserKeyOne";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a delete user impulse
*/
export interface DeletedUserImpulse {
    id?:Uuid, 
    data?:UserKeyOne
}