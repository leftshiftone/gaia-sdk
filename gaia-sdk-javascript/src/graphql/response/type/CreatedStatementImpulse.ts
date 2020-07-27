
import {Statement} from "./Statement";

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the result of a create statement impulse
*/
export interface CreatedStatementImpulse {
    id?:Uuid,
    /**
    * the statement instance
    */
    data?:Statement
}
