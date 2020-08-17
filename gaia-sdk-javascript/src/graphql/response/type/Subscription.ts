
import {Interaction} from "./Interaction";
import {Introspection} from "./Introspection";
import {Notification} from "./Notification";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

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