

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents graph information
*/
export interface Edge {
    source?:Uuid, 
    target?:Uuid, 
    edgeId?:Uuid, 
    type?:string, 
    weight?:number, 
    properties?:Struct
}