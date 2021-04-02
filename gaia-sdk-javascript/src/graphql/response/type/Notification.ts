
import {OnUpdated} from "./OnUpdated";
import {OnDeleted} from "./OnDeleted";
import {OnCreated} from "./OnCreated";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface Notification {
    onCreated?:OnCreated, 
    onUpdated?:OnUpdated, 
    onDeleted?:OnDeleted
}