
import {SkillVersion} from "./SkillVersion";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents Skill information
*/
export interface Skill {
    /**
    * Id of the tenant
    */
    tenantId?:Uuid,
    /**
    * Skill reference
    */
    reference?:Uuid,
    /**
    * The name of the skill
    */
    qualifier?:string,
    /**
    * Detailed description about the skill
    */
    appendent?:string,
    /**
    * The list of labels of the skill
    */
    labelList?:[string],
    /**
    * The uri of the repository where the skill is
    */
    repositoryUri?:string,
    /**
    * The type of the repository where the skill is
    */
    repositoryType?:string,
    /**
    * The list of available and build skill versions
    */
    versions?:[SkillVersion],
    /**
    * A list of all available version tags
    */
    tags?:[string]
}
