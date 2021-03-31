
import {SkillBuildJob} from "./SkillBuildJob";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface Introspection {
    /**
    * Introspects the build jobs currently available in the system
    */
    buildJobs?:[SkillBuildJob]
}