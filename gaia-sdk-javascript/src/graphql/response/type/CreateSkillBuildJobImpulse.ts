

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

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