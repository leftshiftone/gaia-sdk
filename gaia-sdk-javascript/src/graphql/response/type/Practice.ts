
import {CreatedSkillBuildJobImpulse} from "./CreatedSkillBuildJobImpulse";
import {StreamingImpulse} from "./StreamingImpulse";
import {CanceledSkillBuildJobImpulse} from "./CanceledSkillBuildJobImpulse";
import {StreamImpulse} from "../../request/input/StreamImpulse";
import {CreateSkillBuildJobImpulse} from "../../request/input/CreateSkillBuildJobImpulse";
import {CancelSkillBuildJobImpulse} from "../../request/input/CancelSkillBuildJobImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* This type contains all practice sensor impulses which are used to support
* practice in gaia.
*/
export interface Practice {
    /**
    * Stream practice preparation impulse used to transfer a skill to gaia.
    *     This perception impulse do not invoke the data transmission but establishes
    *     a connection to the streaming api.
    */
    prepare?:StreamingImpulse, 
    build?:CreatedSkillBuildJobImpulse, 
    cancel?:CanceledSkillBuildJobImpulse
}