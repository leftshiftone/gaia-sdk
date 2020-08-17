
import {Code} from "./Code";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

/**
* Impulse which indicates the result of a update code impulse
*/
export interface UpdatedCodeImpulse {
    id?:Uuid, 
    /**
    * the code instance
    */
    data?:Code
}