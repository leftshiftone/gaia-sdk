
import {Statement} from "./Statement";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the resulf of a create statement impulse
*/
export interface CreatedStatementImpulse {
    id?:Uuid, 
    /**
    * the statement instance
    */
    statement?:Statement
}