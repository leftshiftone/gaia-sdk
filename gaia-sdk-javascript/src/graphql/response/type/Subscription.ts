
import {Interaction} from "./Interaction";
import {Introspection} from "./Introspection";
import {Notification} from "./Notification";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

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