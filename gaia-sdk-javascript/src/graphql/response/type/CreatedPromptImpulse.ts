
import {Prompt} from "./Prompt";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a create prompt impulse
*/
export interface CreatedPromptImpulse {
    id?:Uuid, 
    /**
    * the prompt instance
    */
    data?:Prompt
}