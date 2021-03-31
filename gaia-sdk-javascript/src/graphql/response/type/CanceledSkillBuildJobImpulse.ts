
import {SkillBuildJob} from "./SkillBuildJob";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface CanceledSkillBuildJobImpulse {
    id?:Uuid, 
    data?:SkillBuildJob
}