
import {Code} from "./Code";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the resulf of a create code impulse
*/
export interface CreatedCodeImpulse {
    id?:Uuid, 
    /**
    * the code instance
    */
    code?:Code
}