
import {Experience} from "./Experience";
import {Knowledge} from "./Knowledge";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

export interface Retrieval {
    /**
    * Container element which collects all information static data
    */
    knowledge?:Knowledge, 
    /**
    * Container element which collects all information about runtime data
    */
    experience?:Experience
}