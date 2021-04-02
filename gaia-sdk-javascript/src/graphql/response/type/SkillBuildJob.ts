
import {SkillStatus} from "./SkillStatus";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* A skill build job creates definitive versions for Skill
*/
export interface SkillBuildJob {
    /**
    * The reference of this build job
    */
    reference?:Uuid, 
    /**
    * Id of the tenant
    */
    tenantId?:Uuid, 
    /**
    * reference to the skill being built
    */
    skillRef?:string, 
    /**
    * the associated version tag
    */
    tag?:string, 
    /**
    * The name of the build job
    */
    name?:string, 
    /**
    * The current status of the build job
    */
    status?:SkillStatus, 
    /**
    * created at
    */
    created?:ISO8601
}