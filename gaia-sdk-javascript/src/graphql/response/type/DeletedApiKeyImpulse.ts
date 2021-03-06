
import {ApiKeyKeyOne} from "./ApiKeyKeyOne";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a delete api key impulse
*/
export interface DeletedApiKeyImpulse {
    id?:Uuid, 
    data?:ApiKeyKeyOne
}