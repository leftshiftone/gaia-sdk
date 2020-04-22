
import {OnUpdated} from "./OnUpdated";
import {OnDeleted} from "./OnDeleted";
import {OnCreated} from "./OnCreated";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface Notification {
    onCreated?:OnCreated, 
    onUpdated?:OnUpdated, 
    onDeleted?:OnDeleted
}