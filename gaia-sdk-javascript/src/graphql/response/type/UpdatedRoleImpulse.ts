
import {Role} from "./Role";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a update role impulse
*/
export interface UpdatedRoleImpulse {
    id?:Uuid, 
    data?:Role
}