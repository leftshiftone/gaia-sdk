
import {DeleteKnowledge} from "./DeleteKnowledge";
import {UpdateKnowledge} from "./UpdateKnowledge";
import {CreateKnowledge} from "./CreateKnowledge";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* This type contains all preservation sensor impulses which are used to support
* read/write/delete memory functions in gaia.
*/
export interface Preservation {
    create?:CreateKnowledge, 
    update?:UpdateKnowledge, 
    delete?:DeleteKnowledge
}