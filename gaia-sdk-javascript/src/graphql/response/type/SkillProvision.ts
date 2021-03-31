
import {SkillStatus} from "./SkillStatus";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents SkillProvision information
*/
export interface SkillProvision {
    /**
    * Id of the tenant
    */
    tenantId?:Uuid, 
    /**
    * Skill reference
    */
    reference?:Uuid, 
    /**
    * The name of the skill provision
    */
    qualifier?:string, 
    /**
    * Detailed description about the skill provision
    */
    appendent?:string, 
    /**
    * The list of labels of the skill provision
    */
    labelList?:[string], 
    /**
    * The version used by this skill provision
    */
    version?:string, 
    /**
    * The reference to skill
    */
    skillRef?:string, 
    /**
    * CPU
    */
    cpu?:number, 
    /**
    * Memory
    */
    memory?:number, 
    /**
    * Amount of replicas
    */
    replicas?:number, 
    /**
    * Whether the skill provision should be enabled or not
    */
    enabled?:Boolean, 
    /**
    * Amount of seconds that the skill requires to be ready
    */
    bootstrapTimeout?:number, 
    /**
    * Value-Key pairs with information needed for the skill provision
    */
    environment?:Struct, 
    /**
    * The current status of the skill provision
    */
    status?:SkillStatus, 
    /**
    * The contract associated with this provision
    */
    contract?:string
}