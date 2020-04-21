
import {OnUpdated} from "./OnUpdated";
import {OnDeleted} from "./OnDeleted";
import {OnCreated} from "./OnCreated";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface Notification {
    onCreated?:OnCreated, 
    onUpdated?:OnUpdated, 
    onDeleted?:OnDeleted
}