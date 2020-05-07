
import {Prompt} from "./Prompt";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Impulse which indicates the resulf of a create prompt impulse
*/
export interface CreatedPromptImpulse {
    id?:Uuid, 
    /**
    * the prompt instance
    */
    data?:Prompt
}