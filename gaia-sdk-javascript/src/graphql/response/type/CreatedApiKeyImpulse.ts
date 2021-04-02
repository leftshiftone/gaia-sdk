
import {CreatedApiKey} from "./CreatedApiKey";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a create api key impulse
*/
export interface CreatedApiKeyImpulse {
    id?:Uuid, 
    data?:CreatedApiKey
}