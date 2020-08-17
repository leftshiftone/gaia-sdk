
import {KeyOne} from "./KeyOne";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

/**
* Impulse which indicates the result of a delete intent impulse
*/
export interface DeletedIntentImpulse {
    id?:Uuid, 
    data?:KeyOne
}