

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* This impulse returns the result of a skill practice query request
*/
export interface SkillPracticedImpulse {
    id?:Uuid,
    /**
    * The result of the skill practice
    */
    data?:Struct
}
