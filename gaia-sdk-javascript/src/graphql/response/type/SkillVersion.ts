

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* A skill version is a built version of a skill created by a SkillBuildJob
*/
export interface SkillVersion {
    skillRef?:string, 
    version?:string, 
    created?:ISO8601
}