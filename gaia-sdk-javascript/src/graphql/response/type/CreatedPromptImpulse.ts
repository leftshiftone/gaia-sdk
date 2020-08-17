
import {Prompt} from "./Prompt";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

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