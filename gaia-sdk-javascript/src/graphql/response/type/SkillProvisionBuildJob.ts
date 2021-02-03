

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface SkillProvisionBuildJob {
    /**
    * Id of the tenant
    */
    tenantId?:Uuid, 
    /**
    * Reference to the skill provision for that build job
    */
    provisionRef?:string, 
    /**
    * Reference to the skill
    */
    skillRef?:string, 
    /**
    * The name of the build job
    */
    name?:string, 
    /**
    * The current status of the build job
    */
    status?:Struct
}