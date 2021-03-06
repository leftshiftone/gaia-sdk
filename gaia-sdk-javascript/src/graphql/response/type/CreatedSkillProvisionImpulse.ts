
import {SkillProvision} from "./SkillProvision";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Impulse which indicates the result of a create SkillProvision impulse
*/
export interface CreatedSkillProvisionImpulse {
    id?:Uuid, 
    /**
    * the SkillProvision instance
    */
    data?:SkillProvision
}