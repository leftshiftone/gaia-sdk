
import {Statement} from "./Statement";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

/**
* Impulse which indicates the result of a update statement impulse
*/
export interface UpdatedStatementImpulse {
    id?:Uuid, 
    /**
    * the statement instance
    */
    data?:Statement
}