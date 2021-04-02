import {Uuid} from "../../GaiaClient";

export interface CreateSkillBuildJobImpulse {
    /**
    * The unique identifier of this specific impulse
    */
    id?:Uuid,
    /**
    * The reference of the skill being built
    */
    skillRef?:Uuid,
    tag?:string
}
