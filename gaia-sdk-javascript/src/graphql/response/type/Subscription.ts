
import {Interaction} from "./Interaction";
import {Introspection} from "./Introspection";
import {Notification} from "./Notification";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

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