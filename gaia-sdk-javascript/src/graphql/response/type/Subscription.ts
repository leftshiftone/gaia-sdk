
import {Interaction} from "./Interaction";
import {Introspection} from "./Introspection";
import {Notification} from "./Notification";

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* the top level subscription type
*/
export interface Subscription {
    interact?:Interaction,
    notify?:Notification,
    /**
    * Container element for all introspect sensor fields
    */
    introspect?:Introspection
}
