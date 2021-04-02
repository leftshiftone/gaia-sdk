

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface OnUpdated {
    id?:Uuid, 
    identityId?:Uuid, 
    reference?:Uuid, 
    type?:string
}